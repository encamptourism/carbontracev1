import Head from 'next/head';
import Router from "next/router";
const HtmlHead=()=>{


return(
        <Head>
        <title>Carbon Trace Powered by Encamp-Adventures</title>
        <meta name="description" content="Carbon Trace Powered by Encamp-Adventures"/>
        <link rel="icon" src="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        </Head>
	)

}
export default HtmlHead;