<template>
  <div id="app" ref="app">
    <div id="dashboard" ref="dashboard"></div>
  </div>
</template>

<script>
import $ from 'jquery';
import {BoldBI} from '@boldbi/boldbi-embedded-sdk';
window.jQuery = $

export default ({
  name: 'App',
  async mounted() {
    var scripts = [
      "https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js",
    ];
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      tag.setAttribute("type", "text/javascript");
      tag.setAttribute("defer", "defer");
      tag.async = true;
      document.head.appendChild(tag);
    });

    //Url of the GetDetails api in ASP.NET Core server and act as Authorization Server.
    let authorizationUrl = "http://localhost:5000/api/boldbiembed/authorizationserver";

     try {
      const response = await fetch('http://localhost:5000/api/boldbiembed/getserverdetails');
      const data = await response.json();
      // Transform camelCase keys to PascalCase
      const transformedEmbedConfigData = {
        DashboardId: data.dashboardId,
        EmbedType: data.embedType,
        Environment: data.environment,
        ServerUrl: data.serverUrl,
        SiteIdentifier: data.siteIdentifier
      };
      renderDashboard(transformedEmbedConfigData);
          
    } catch (error) {
        this.errorMessage = 'Error: embedConfig.json file is not found.';
    }

    function renderDashboard(data) {
      let dashboard = BoldBI.create({
        serverUrl: data.ServerUrl + '/' + data.SiteIdentifier,
        dashboardId: data.DashboardId,
        embedContainerId: 'dashboard',
        width: '100%',
        height: window.innerHeight -18 + 'px',
        authorizationServer: {
          url: authorizationUrl
        }
      });
      dashboard.loadDashboard();
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>