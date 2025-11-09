import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { event, page, pin } = body

    // Get visitor info
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'Unknown'
    const userAgent = request.headers.get('user-agent') || 'Unknown'
    const referer = request.headers.get('referer') || 'Direct'

    // Get geo info from IP (if available from headers)
    const country = request.headers.get('cf-ipcountry') || 'Unknown'
    const city = request.headers.get('cf-ipcity') || 'Unknown'

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
      dateStyle: 'full',
      timeStyle: 'long'
    })

    let embed: any = {
      title: event === 'login' ? '🔐 Logged In User - Page View' : '👁️ Page View',
      color: event === 'login' ? 0x722F37 : 0x00BFFF,
      fields: [
        { name: '📍 IP Address', value: ip, inline: true },
        { name: '🌍 Location', value: `${city}, ${country}`, inline: true },
        { name: '🕐 Time', value: timestamp, inline: false },
        { name: '📱 Device', value: userAgent.includes('Mobile') ? 'Mobile' : 'Desktop', inline: true },
      ],
      footer: {
        text: 'Musso & Frank Visitor Tracker'
      },
      timestamp: new Date().toISOString()
    }

    if (event === 'login') {
      embed.fields.push({ name: '🔑 PIN Used', value: pin || 'N/A', inline: true })
      embed.fields.push({ name: '🔗 Referrer', value: referer, inline: false })
    } else {
      embed.fields.push({ name: '📄 Page', value: page, inline: false })
    }

    embed.fields.push({ name: '🖥️ User Agent', value: `\`\`\`${userAgent}\`\`\``, inline: false })

    await fetch('https://discord.com/api/webhooks/1433666487154900992/s8xHxHG7vVZoSv8-MrMmqCKd7Z8meaUVKea_PvoC4edDUQZyqFNK2_clg_kfC5UTREQ3', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] })
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Tracking error:', error)
    return NextResponse.json({ error: 'Failed to track' }, { status: 500 })
  }
}
