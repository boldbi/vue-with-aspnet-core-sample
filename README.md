# BoldBI Embedding Vue with ASP.NET Core Samples

 This Bold BI Vue with ASP.NET Core sample contains the Dashboard embedding samples. In this sample Vue application act as front-end and ASP.NET Core act as back-end application. This samples demonstrates the dashboard rendering with the list of dashboards available in your Bold BI server.

This section guides you in using the Bold BI dashboard in your Vue with ASP.NET Core sample application.

 * [Requirements to run the demo](#requirements-to-run-the-demo)
 * [Using the Vue with ASP.NET Core sample](#using-the-vue-with-asp.net-core-sample)
 * [Online Demos](#online-demos)
 * [Documentation](#documentation)
 
  ## Requirements to run the demo

The samples require the following requirements to run.

 * [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/)
 * [.NET Core 6.0 or later](https://dotnet.microsoft.com/en-us/download/dotnet-core)
 * [Node.js](https://nodejs.org/en/)
 * [Visual Studio Code](https://code.visualstudio.com/download)

 ## Using the Vue with ASP.NET Core sample
 
 * Open the ASP.NET Core sample's solution file `Syncfusion.Server.EmbedBoldBI.sln` in Visual studio. 

 * Open the EmbedProperties.cs file in the following location, /Models/EmbedProperties.cs.

 * Please change the following properties in the `EmbedProperties.cs` file as per your Bold BI Server.

    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
            <td align="left">RootUrl</td>
            <td align="left">Dashboard Server URL (Eg: http://localhost:5000/bi, http://demo.boldbi.com/bi).</td>
        </tr>
        <tr>
            <td align="left">EmbedSecret</td>
            <td align="left">Get your EmbedSecret key from the Embed tab by enabling the `Enable embed authentication` on the Administration page https://help.boldbi.com/embedded-bi/site-administration/embed-settings/.</td>
        </tr>
        <tr>
            <td align="left">SiteIdentifier</td>
            <td align="left">For the Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be an empty string.</td>
        </tr>
        <tr>
            <td align="left">Environment</td>
            <td align="left">Your Bold BI application environment. (If Cloud, you should use `cloud,` if Enterprise, you should use `enterprise`).</td>
        </tr>
        <tr>
            <td align="left">UserEmail</td>
            <td align="left">UserEmail of the Admin in your Bold BI, which would be used to get the dashboard list.</td>
        </tr>
    </tbody>
    </table>


* Now run the back-end ASP.NET Core sample.

* Open the `Vue` sample in Visual studio code.

* Open the `App.vue` in following location, /src/App.vue.

* Please change the following properties in the `App.vue` file as per the your Bold BI server and back-end application.

    <meta charset="utf-8"/>
    <table>
    <tbody>
        <tr>
            <td align="left">rootUrl</td>
            <td align="left">Dashboard Server URL (Eg: http://localhost:5000/bi, http://demo.boldbi.com/bi).</td>
        </tr>
        <tr>
            <td align="left">siteIdentifier</td>
            <td align="left">For the Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be an empty string.</td>
        </tr>
        <tr>
            <td align="left">environment</td>
            <td align="left">Your Bold BI application environment. (If Cloud, you should use `cloud,` if Enterprise, you should use `enterprise`).</td>
        </tr>
        <tr>
            <td align="left">dashboardId</td>
            <td align="left">Provide the dashboard id of the dashboard you want to embed in view or edit mode. Ignore this property to create new dashboard.</td>
        </tr>
        <tr>
            <td align="left">authorizationUrl</td>
            <td align="left">Url of the 'GetDetails' action in the ASP.NET application.</td>
        </tr>
    </tbody>
    </table>

### Install npm

To install all dependent packages, use the below command

```bash
npm install
```

### Install Bold BI Embedded SDK package

To install the Bold BI Embedded SDK package using the following command,

```bash
npm install -save @boldbi/boldbi-embedded-sdk
``` 

### Run/Serve

To run the samples, use the below command

```bash
npm run serve
```

Please refer to the [help documentation](https://help.boldbi.com/embedded-bi/javascript-based/samples/v3.3.40-or-later/vuejs-with-core/#how-to-run-the-sample) to know how to run the sample.

## Online Demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).


## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).

