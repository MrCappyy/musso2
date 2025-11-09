import { NextRequest, NextResponse } from 'next/server'

const VALID_PIN = '19196667' // 1919-6667

export async function POST(request: NextRequest) {
  try {
    const { pin } = await request.json()

    // Get visitor info for logging
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'Unknown'
    const userAgent = request.headers.get('user-agent') || 'Unknown'
    const country = request.headers.get('cf-ipcountry') || 'Unknown'
    const city = request.headers.get('cf-ipcity') || 'Unknown'

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
      dateStyle: 'full',
      timeStyle: 'long'
    })

    if (pin === VALID_PIN) {
      // Log successful login
      await fetch('https://discord.com/api/webhooks/1433666487154900992/s8xHxHG7vVZoSv8-MrMmqCKd7Z8meaUVKea_PvoC4edDUQZyqFNK2_clg_kfC5UTREQ3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [{
            title: '✅ Successful Login',
            color: 0x00FF00,
            fields: [
              { name: '📍 IP Address', value: ip, inline: true },
              { name: '🌍 Location', value: `${city}, ${country}`, inline: true },
              { name: '🕐 Time', value: timestamp, inline: false },
              { name: '🔑 PIN Used', value: '✅ CORRECT (1919-6667)', inline: true },
              { name: '📱 Device', value: userAgent.includes('Mobile') ? 'Mobile' : 'Desktop', inline: true },
              { name: '🖥️ User Agent', value: `\`\`\`${userAgent}\`\`\``, inline: false }
            ],
            footer: { text: 'Musso & Frank Security Log' },
            timestamp: new Date().toISOString()
          }]
        })
      }).catch(console.error)

      return NextResponse.json({ success: true })
    }

    // Log failed login attempt
    await fetch('https://discord.com/api/webhooks/1433666487154900992/s8xHxHG7vVZoSv8-MrMmqCKd7Z8meaUVKea_PvoC4edDUQZyqFNK2_clg_kfC5UTREQ3', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: '🚫 Failed Login Attempt',
          color: 0xFF0000,
          fields: [
            { name: '📍 IP Address', value: ip, inline: true },
            { name: '🌍 Location', value: `${city}, ${country}`, inline: true },
            { name: '🕐 Time', value: timestamp, inline: false },
            { name: '❌ PIN Attempted', value: `\`${pin || 'empty'}\``, inline: true },
            { name: '📱 Device', value: userAgent.includes('Mobile') ? 'Mobile' : 'Desktop', inline: true },
            { name: '⚠️ Status', value: '**UNAUTHORIZED ACCESS ATTEMPT**', inline: false },
            { name: '🖥️ User Agent', value: `\`\`\`${userAgent}\`\`\``, inline: false }
          ],
          footer: { text: 'Musso & Frank Security Alert' },
          timestamp: new Date().toISOString()
        }]
      })
    }).catch(console.error)

    return NextResponse.json({ success: false, error: 'Invalid PIN' }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
