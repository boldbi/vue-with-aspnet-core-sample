# Bold BI Embedded Sample in Vue.js with ASP.NET Core

 This Bold BI Vue.js with ASP.NET Core sample contains the Dashboard embedding samples. In this sample Vue application act as front-end and ASP.NET Core act as back-end application. This application aims to demonstrate how to render the dashboard available on your Bold BI server.

## Dashboard view

![Dashboard View](/images/dashboard.png)

## Requirements/Prerequisites

* [Visual Studio Code](https://code.visualstudio.com/download)
* [Node.js](https://nodejs.org/en/)

 > **NOTE:** Node.js v18.17 to v20.15 are supported.

### Supported browsers
  
* Google Chrome, Microsoft Edge, and Mozilla Firefox.

## Configuration

* Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code?utm_source=github&utm_medium=backlinks) to enable it.

    ![Embed Settings](/images/enable-embedsecretkey.png)

* To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file?utm_source=github&utm_medium=backlinks) for reference. Additionally, you can refer to the following image for visual guidance.

     ![Embed Settings Download](/images/download-embedsecretkey.png)
     ![EmbedConfig Properties](/images/embedconfig-file.png)

* Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/vue-with-aspnet-core-sample/tree/master/BoldBI.Embed.Sample/BoldBI.Embed.Sample) within the application. Please ensure you have placed it in the application, as shown in the following image.

    ![EmbedConfig image](/images/embedconfig-location.png)

## Run a Sample Using Command Line Interface

* Open the command line interface and navigate to the specified file [location](https://github.com/boldbi/vue-with-aspnet-core-sample/tree/master/BoldBI.Embed.Sample/BoldBI.Embed.Sample) where the project is located.

* Run the back-end `ASP.NET Core` sample using the following command `dotnet run`. After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., <http://localhost:5000/api/boldbiembed>). Copy this URL and paste it into your default web browser.

* Open the command line interface and navigate to the specified file [location](https://github.com/boldbi/vue-with-aspnet-core-sample/tree/master/Vue) where the project is located.

* To install all dependent packages, use the following command `npm install`.

* Finally, run the application using the following command `npm run serve`. After the application has started, it will display a URL in the command line interface, typically something like (e.g., <http://localhost:8080>). Copy this URL and paste it into your default web browser.

## Developer IDE

* [Visual Studio Code](<https://code.visualstudio.com/download>)

### Run a Sample Using Visual Studio Code

* Open the `ASP.NET Core` sample in **Visual Studio Code**.

* Run the back-end `ASP.NET Core` sample using the following command `dotnet run`. After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., <http://localhost:5000/api/boldbiembed>). Copy this URL and paste it into your default web browser.

* Open the `Vue` sample in a new window of **Visual Studio Code**.

* To install all dependent packages, use the following command `npm install`.

* Finally, run the application using the following command `npm run serve`. After the application has started, it will display a URL in the command line interface, typically something like (e.g., <http://localhost:8080>). Copy this URL and paste it into your default web browser.

![dashboard image](/images/dashboard.png)

Please refer to the [help documentation](https://help.boldbi.com/embedding-options/embedding-sdk/samples/vuejs-with-core/#how-to-run-the-sample?utm_source=github&utm_medium=backlinks) to know how to run the sample.

## Online Demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed?utm_source=github&utm_medium=backlinks).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/?utm_source=github&utm_medium=backlinks).
