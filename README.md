# Bold BI Embedded Sample in Vue with ASP.NET Core

 This Bold BI Vue with ASP.NET Core sample contains the Dashboard embedding samples. In this sample Vue application act as front-end and ASP.NET Core act as back-end application. This application aims to demonstrate how to render the dashboard available on your Bold BI server.

 ## Dashboard view

![Dashboard View](https://github.com/boldbi/aspnet-core-sample/assets/91586758/83fa08d3-0211-4cd1-98ef-1d366c9db665)

 ## Requirements/Prerequisites

 * [Go installer](https://go.dev/dl/)
 * [Visual Studio Code](https://code.visualstudio.com/download)
 * [Node.js](https://nodejs.org/en/)

 > **NOTE:** Node.js v12.11 to v18.16 are supported.

#### Supported browsers
  
  * Google Chrome, Microsoft Edge, Mozilla Firefox.

 ## Configuration

  * Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](https://github.com/boldbi/aspnet-core-sample/assets/91586758/b3a81978-9eb4-42b2-92bb-d1e2735ab007)

  * To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.

     ![Embed Settings Download](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d27d4cfc-6a3e-4c34-975e-f5f22dea6172)
     ![EmbedConfig Properties](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d6ce925a-0d4c-45d2-817e-24d6d59e0d63)

  * Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/vue-with-aspnet-core-sample/tree/master/BoldBI.Embed.Sample/BoldBI.Embed.Sample) within the application. Please ensure you have placed it in the application, as shown in the following image.
    
    ![EmbedConfig image](https://github.com/boldbi/aspnet-core-sample/assets/91586758/e4c11292-d3e2-4a35-80a8-9eadf727bec2)

 ## Run a Sample Using Command Line Interface 
    
  * Open the command line interface and navigate to the specified file [location](https://github.com/boldbi/vue-with-aspnet-core-sample/tree/master/BoldBI.Embed.Sample/BoldBI.Embed.Sample) where the project is located.

  * Run the back-end `ASP.NET Core` sample using the following command `dotnet run`.

  * Open the command line interface and navigate to the specified file [location](https://github.com/boldbi/vue-with-aspnet-core-sample/tree/master/Vue) where the project is located.
   
  * To install all dependent packages, use the following command `npm install`.
    
    > **NOTE:** If you are using Node.js version higher than v16.17, you should enter the following command in the terminal `$env:NODE_OPTIONS="--openssl-legacy-provider"`.

  * Finally, run the application using the following command `npm run serve`. After the application has started, it will display a URL in the command line interface, typically something like (e.g., http://localhost:8080). Copy this URL and paste it into your default web browser.

 ## Developer IDE

  * Visual studio code(https://code.visualstudio.com/download)

  ### Run a Sample Using Visual Studio Code
 
  * Open the `ASP.NET Core` sample in **Visual Studio Code**.

  * Run the back-end `ASP.NET Core` sample using the following command `dotnet run`.

  * Open the `Vue` sample in a new window of **Visual Studio Code**.
   
  * To install all dependent packages, use the following command `npm install`.

    > **NOTE:** If you are using Node.js version higher than v16.17, you should enter the following command in the terminal `$env:NODE_OPTIONS="--openssl-legacy-provider"`.

  * Finally, run the application using the following command `npm run serve`. After the application has started, it will display a URL in the command line interface, typically something like (e.g., http://localhost:8080). Copy this URL and paste it into your default web browser.

![dashboard image](https://github.com/boldbi/aspnet-core-sample/assets/91586758/83fa08d3-0211-4cd1-98ef-1d366c9db665)

Please refer to the [help documentation](https://help.boldbi.com/embedding-options/embedding-sdk/samples/vuejs-with-core/#how-to-run-the-sample) to know how to run the sample.

## Online Demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).


## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).

