<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>MAGDIO — XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style>
          body {
            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: #04081c;
            color: #ffffff;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            background: rgba(15, 23, 42, 0.85);
            border: 1px solid rgba(138, 43, 226, 0.3);
            border-radius: 16px;
            padding: 32px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(12px);
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 24px;
            margin-bottom: 24px;
            flex-wrap: wrap;
            gap: 16px;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 800;
            background: linear-gradient(135deg, #8A2BE2, #D9D7FF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .header p {
            margin: 6px 0 0;
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
          }
          .badge {
            background: rgba(138, 43, 226, 0.25);
            border: 1px solid rgba(138, 43, 226, 0.5);
            color: #D9D7FF;
            padding: 8px 18px;
            border-radius: 9999px;
            font-size: 14px;
            font-weight: 600;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }
          th {
            padding: 12px 16px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: rgba(255, 255, 255, 0.5);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          td {
            padding: 14px 16px;
            font-size: 14px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            color: rgba(255, 255, 255, 0.85);
          }
          tr:hover td {
            background: rgba(138, 43, 226, 0.08);
          }
          a {
            color: #a78bfa;
            text-decoration: none;
            word-break: break-all;
          }
          a:hover {
            text-decoration: underline;
            color: #c4b5fd;
          }
          .priority-badge {
            display: inline-block;
            padding: 3px 10px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 700;
          }
          .priority-1 { background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
          .priority-09 { background: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); }
          .priority-08 { background: rgba(168, 85, 247, 0.2); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3); }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div>
              <h1>MAGDIO XML Sitemap</h1>
              <p>Search Engine Indexing Guide for <a href="https://www.magdio.com/">https://www.magdio.com/</a></p>
            </div>
            <div class="badge">
              Total Indexable URLs: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>URL Target</th>
                <th>Priority</th>
                <th>Change Frequency</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}" target="_blank">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="priority-badge">
                      <xsl:attribute name="class">
                        <xsl:text>priority-badge </xsl:text>
                        <xsl:choose>
                          <xsl:when test="sitemap:priority = '1.0'">priority-1</xsl:when>
                          <xsl:when test="sitemap:priority = '0.9'">priority-09</xsl:when>
                          <xsl:otherwise>priority-08</xsl:otherwise>
                        </xsl:choose>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td>
                    <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
