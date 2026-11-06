function trackLead() {
  console.log("Clique no botão do grupo registrado.");

  if (typeof fbq === "function") {
    fbq("track", "Lead");
  }
}
