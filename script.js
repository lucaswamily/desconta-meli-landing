function trackLead(botao) {

  console.log("Lead registrado:", botao);

  if (typeof fbq === "function") {

    fbq("track", "Lead", {
      content_name: "Grupo Desconta Meli",
      content_category: "Grupo WhatsApp",
      button_location: botao
    });

  }

}
