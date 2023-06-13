import Script from 'next/script'

export function Analitycs() {
  const GTM_ID = 'GTM-WJ8B4JL'
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-QYNZTSYH7Y"
      ></script>
      <Script
        strategy="afterInteractive"
        id="Google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
         window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QYNZTSYH7Y');`,
        }}
      />
    </>
  )
}
