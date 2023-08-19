
  // JavaScript pour les effets de survol et les transitions
  document.addEventListener("DOMContentLoaded", function () {
    // Effet de survol sur les éléments avec la classe "service"
    const serviceItems = document.querySelectorAll(".service");
    serviceItems.forEach((item) => {
      item.addEventListener("mouseover", function () {
        item.querySelector(".iconbox").style.opacity = "1";
      });
      item.addEventListener("mouseout", function () {
        item.querySelector(".iconbox").style.opacity = "0";
      });
    });

    // Effet de survol sur les éléments avec la classe "project-item"
    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach((item) => {
      item.addEventListener("mouseover", function () {
        item.querySelector(".iconbox").style.opacity = "1";
      });
      item.addEventListener("mouseout", function () {
        item.querySelector(".iconbox").style.opacity = "0";
      });
    });

    // Effet de survol sur les éléments avec la classe "team-member"
    const teamMembers = document.querySelectorAll(".team-member");
    teamMembers.forEach((member) => {
      member.addEventListener("mouseover", function () {
        member.querySelector(".team-member-content").style.opacity = "1";
      });
      member.addEventListener("mouseout", function () {
        member.querySelector(".team-member-content").style.opacity = "0";
      });
    });
  });

