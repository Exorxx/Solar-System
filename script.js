document.addEventListener("DOMContentLoaded", () => {
  const planetData = {
    Mercury: {
      description:
        "Mercury, the innermost planet of the solar system and the eighth in size and mass. Its closeness to the Sun and its smallness make it the most elusive of the planets visible to the unaided eye. Because its rising or setting is always within about two hours of the Sun’s, it is never observable when the sky is fully dark.",
      bgImage: "/assets/images/mercury.png",
      bgPosition: "bottom left",
      glowColor: "#a9998b",
      bgAngle: 10,
    },
    Venus: {
      description:
        "Venus, second planet from the Sun and sixth in the solar system in size and mass. No planet approaches closer to Earth than Venus; at its nearest it is the closest large body to Earth other than the Moon. Because Venus’s orbit is nearer the Sun than Earth’s, the planet is always roughly in the same direction in the sky as the Sun and can be seen only in the hours near sunrise or sunset.",
      bgImage: "/assets/images/venus.png",
      bgPosition: "bottom right",
      glowColor: "#814f27",
      bgAngle: 270,
    },
    Earth: {
      description:
        "Earth, third planet from the Sun and the fifth largest planet in the solar system in terms of size and mass. Its single most outstanding feature is that its near-surface environments are the only places in the universe known to harbour life.",
      bgImage: "/assets/images/earth.png",
      bgPosition: "bottom left",
      glowColor: "#27311d",
      bgAngle: 100,
    },
    Mars: {
      description:
        "Mars, fourth planet in the solar system in order of distance from the Sun and seventh in size and mass. It is a periodically conspicuous reddish object in the night sky and sometimes is referred to as the Red Planet.",
      bgImage: "/assets/images/mars.png",
      bgPosition: "bottom right",
      glowColor: "#995232",
      bgAngle: 270,
    },
    Jupiter: {
      description:
        "Jupiter, fifth planet from the Sun and the largest planet in the solar system. More than twice as massive as all the other planets combined, Jupiter is a gas giant composed primarily of hydrogen and helium. Its most famous feature is the Great Red Spot, a colossal storm that has raged for centuries. Jupiter’s immense magnetic field and numerous moons, including Ganymede (the largest moon in the solar system), make it a miniature planetary system in its own right.",
      bgImage: "/assets/images/jupiter.png",
      bgPosition: "bottom left",
      glowColor: "#a66a3f",
      bgAngle: 60,
    },
    Saturn: {
      description:
        "Saturn, sixth planet from the Sun and the second largest in the solar system, is best known for its magnificent ring system, which is made primarily of ice particles mixed with dust and rock fragments. Saturn is a gas giant like Jupiter, composed mainly of hydrogen and helium. It has dozens of moons, including Titan, which has a thick atmosphere and lakes of liquid methane and ethane, making it one of the most intriguing bodies in the solar system.",
      bgImage: "/assets/images/saturn.png",
      bgPosition: "bottom right",
      glowColor: "#4e4234",
      bgAngle: 0,
    },
    Uranus: {
      description:
        "Uranus, the seventh planet from the Sun, is classified as an ice giant because of its large proportion of water, ammonia, and methane ices. Unlike the other planets, Uranus is tilted on its side by about 98 degrees, causing its poles to experience extreme, long-lasting seasons. Its atmosphere, rich in methane, gives the planet its pale blue-green color. Uranus is also encircled by faint rings and has a system of icy moons.",
      bgImage: "/assets/images/uranus.png",
      bgPosition: "bottom left",
      glowColor: "#2b4d6e",
      bgAngle: 0,
    },
    Neptune: {
      description:
        "Neptune, the eighth and most distant planet from the Sun, is another ice giant and is notable for its striking deep blue color caused by methane in its atmosphere. It has the strongest winds in the solar system, with speeds reaching up to 2,100 kilometers per hour. Neptune’s largest moon, Triton, orbits in a direction opposite to the planet’s rotation, suggesting it was likely captured from the Kuiper Belt. Its dynamic weather patterns and supersonic winds make Neptune a world of extremes.",
      bgImage: "/assets/images/neptune.png",
      bgPosition: "bottom right",
      glowColor: "#023a58",
      bgAngle: 240,
    },
  };

  const beltData = {
    Asteroid: {
      description:
        "The Asteroid Belt lies between Mars and Jupiter. It contains millions of rocky bodies, remnants from the early solar system.",
      bgImage: "/assets/images/belt.png",
      bgPosition: "bottom left",
      glowColor: "#ff3300",
      bgAngle: 280,
    },
    Kuiper: {
      description:
        "The Kuiper Belt extends beyond Neptune and contains icy bodies, dwarf planets like Pluto, and many comets.",
      bgImage: "/assets/images/belt.png",
      bgPosition: "bottom right",
      glowColor: "#ff3300",
      bgAngle: 280,
    },
  };

  const infoBox = document.createElement("div");
  infoBox.id = "planet-info";
  infoBox.style.position = "absolute";
  infoBox.style.width = "90%";
  infoBox.style.height = "90%";
  infoBox.style.margin = "auto";
  infoBox.style.padding = ".625rem";
  infoBox.style.background = "rgba(0, 0, 0, 0.5)";
  infoBox.style.color = "white";
  infoBox.style.display = "none";
  infoBox.style.overflow = "hidden";
  infoBox.style.textWrap = "wrap";
  document.body.appendChild(infoBox);

  function getBreakpoint() {
    if (window.matchMedia("(max-width: 35.9375rem)").matches) return "XS";
    if (
      window.matchMedia("(min-width: 36rem) and (max-width: 47.9375rem)")
        .matches
    )
      return "SM";
    if (
      window.matchMedia("(min-width: 48rem) and (max-width: 61.9375rem)")
        .matches
    )
      return "MD";
    if (
      window.matchMedia("(min-width: 62rem) and (max-width: 74.9375rem)")
        .matches
    )
      return "LG";
    if (
      window.matchMedia("(min-width: 75rem) and (max-width: 87.4375rem)")
        .matches
    )
      return "XL";
    if (window.matchMedia("(min-width: 87.5rem)").matches) return "XXL";
    return "Unknown";
  }

  function showInfo(name, data) {
    if (!data) return;

    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    const breakpoint = getBreakpoint();

    // Debug only
    console.log(
      `Current breakpoint: ${breakpoint}, Orientation: ${
        isPortrait ? "Portrait" : "Landscape"
      }`
    );

    let textPosStyles = [];
    let imgPosStyles = [];

    // BREAKPOINTS
    if (breakpoint === "XS") {
      if (isPortrait) {
        textPosStyles.push(
          "top: 16px;",
          "left: 50%;",
          "transform: translateX(-50%);",
          "text-align: center;",
          "width: 90%;"
        );
        imgPosStyles.push(
          "bottom: -8rem;",
          "left: 50%;",
          `transform: translateX(-50%) rotate(${data.bgAngle || 0}deg);`,
          "max-width: 20rem;"
        );
      } else {
        // no need for now
      }
    } else if (breakpoint === "SM") {
      if (isPortrait) {
        // no need for now
      } else {
        textPosStyles.push("top:16px;", "left:16px;", "max-width:65%;");
        imgPosStyles.push(
          "right: -10rem;",
          "bottom: -10rem;",
          `transform: rotate(${data.bgAngle || 0}deg);`,
          "max-width: 25rem;"
        );
      }
    } else if (breakpoint === "MD") {
      if (isPortrait) {
        textPosStyles.push(
          "top: 5rem;",
          "left: 50%;",
          "transform: translateX(-50%);",
          "text-align: center;",
          "width: 85%;"
        );
        imgPosStyles.push(
          "bottom: 1rem;",
          "left: 50%;",
          `transform: translateX(-50%) rotate(${data.bgAngle || 0}deg);`,
          "max-width: 35rem;"
        );
      } else {
        if (data.bgPosition.includes("right")) {
          textPosStyles.push("left: 1rem;");
          imgPosStyles.push(
            "right: -8rem;",
            `transform: rotate(${data.bgAngle || 0}deg);`
          );
        } else {
          textPosStyles.push("right: 1rem;");
          imgPosStyles.push(
            "left: -8rem;",
            `transform: rotate(${data.bgAngle || 0}deg);`
          );
        }
        if (data.bgPosition.includes("bottom")) {
          textPosStyles.push("top: 1rem;");
          imgPosStyles.push(
            "bottom: -8rem;",
            `transform: rotate(${data.bgAngle || 0}deg);`
          );
        } else {
          textPosStyles.push("bottom: 1rem;");
          imgPosStyles.push(
            "top: -8rem;",
            `transform: rotate(${data.bgAngle || 0}deg);`
          );
        }
        textPosStyles.push("max-width: 60%;");
        imgPosStyles.push("max-width: 30rem;");
      }
    } else if (breakpoint === "LG") {
      if (isPortrait) {
        textPosStyles.push(
          "top: 5rem;",
          "left: 50%;",
          "transform: translateX(-50%);",
          "text-align: center;",
          "width: 85%;"
        );
        imgPosStyles.push(
          "bottom: 1rem;",
          "left: 50%;",
          `transform: translateX(-50%) rotate(${data.bgAngle || 0}deg);`,
          "max-width: 50rem;"
        );
      }
    } else if (breakpoint === "XL") {
      if (isPortrait) {
        // no need for now
      } else {
        if (data.bgPosition.includes("right")) {
          textPosStyles.push("left: 4rem;");
          imgPosStyles.push(
            "right:-20rem;",
            `transform: rotate(${data.bgAngle || 0}deg);`
          );
        } else {
          textPosStyles.push("right: 4rem;");
          imgPosStyles.push(
            "left:-20rem;",
            `transform: rotate(${data.bgAngle || 0}deg);`
          );
        }
        if (data.bgPosition.includes("bottom")) {
          textPosStyles.push("top: 4rem;");
          imgPosStyles.push(
            "bottom:-20rem;",
            `transform: rotate(${data.bgAngle || 0}deg);`
          );
        } else {
          textPosStyles.push("bottom: 4rem;");
          imgPosStyles.push(
            "top:-20rem;",
            `transform: rotate(${data.bgAngle || 0}deg);`
          );
        }
        textPosStyles.push("max-width: 50%;");
        imgPosStyles.push("max-width: 55rem;");
      }
    } else if (breakpoint === "XXL") {
      if (isPortrait) {
        // no need for now
      } else {
        if (data.bgPosition.includes("right")) {
          textPosStyles.push("left:128px;");
          imgPosStyles.push(
            "right:-320px;",
            `transform: rotate(${data.bgAngle || 0}deg);`
          );
        } else {
          textPosStyles.push("right:128px;");
          imgPosStyles.push(
            "left:-320px;",
            `transform: rotate(${data.bgAngle || 0}deg);`
          );
        }
        if (data.bgPosition.includes("bottom")) {
          textPosStyles.push("top:128px;");
          imgPosStyles.push(
            "bottom:-320px;",
            `transform: rotate(${data.bgAngle || 0}deg);`
          );
        } else {
          textPosStyles.push("bottom:128px;");
          imgPosStyles.push(
            "top:-320px;",
            `transform: rotate(${data.bgAngle || 0}deg);`
          );
        }
        textPosStyles.push("max-width:40%;");
      }
    }

    infoBox.innerHTML = `
        <div style="position:absolute; ${textPosStyles.join("")} z-index:2;">
        <h1 style="
            font-size: clamp(24px, 5vw, 96px); 
            text-shadow:
            0 0 6.4px #fff,
            0 0 10px #fff,
            0 0 16px #fff,
            0 0 40px ${data.glowColor}7e,
            0 0 80px ${data.glowColor}7e,
            0 0 88px ${data.glowColor}7e,
            0 0 96px ${data.glowColor}7e,
            0 0 144px ${data.glowColor}7e;">${name}</h1>
        <p>${data.description}</p>
        </div>
        <img src="${data.bgImage}" 
            alt="${name}" 
            style="position:absolute;
                    ${imgPosStyles.join("")}
                    opacity:1;
                    z-index:1;"
        />
    `;

    infoBox.style.border = `solid ${data.glowColor}`;
    infoBox.style.display = "block";
  }

  const belts = [
    {
      selector: ".asteroid-belt-orbit",
      count: 80,
      image: "/assets/images/belt.webp",
      size: 4,
      duration: 40,
    },
    {
      selector: ".kuiper-belt-orbit",
      count: 120,
      image: "/assets/images/belt.webp",
      size: 5,
      duration: 80,
    },
  ];

  belts.forEach((belt) => {
    const orbit = document.querySelector(belt.selector);
    if (!orbit) return;

    const beltContainer = document.createElement("div");
    beltContainer.classList.add("belt-container");
    orbit.appendChild(beltContainer);

    const radius = orbit.offsetWidth / 2;
    const center = radius;

    for (let i = 0; i < belt.count; i++) {
      const angle = (i / belt.count) * 2 * Math.PI;

      // 🌌 Random radial offset (±20px or adjust)
      const radialOffset = (Math.random() - 0.5) * 20;

      // 🌠 Random angular jitter (±3 degrees converted to radians)
      const angularJitter = ((Math.random() - 0.5) * 6 * Math.PI) / 180;

      // Apply the offsets
      const finalAngle = angle + angularJitter;
      const finalRadius = radius + radialOffset;

      // 🪨 Create rock
      const rock = document.createElement("div");
      rock.classList.add("asteroid-fragment");
      rock.style.width = `${belt.size}px`;
      rock.style.height = `${belt.size}px`;
      rock.style.position = "absolute";
      rock.style.left = `${
        center + Math.cos(finalAngle) * finalRadius - belt.size / 2
      }px`;
      rock.style.top = `${
        center + Math.sin(finalAngle) * finalRadius - belt.size / 2
      }px`;

      rock.style.backgroundImage = `url('${belt.image}')`;
      rock.style.backgroundSize = "cover";
      rock.style.borderRadius = "50%";
      rock.style.opacity = Math.random() * 0.7 + 0.3;
      rock.style.pointerEvents = "auto";
      rock.style.cursor = "pointer";

      rock.addEventListener("click", (e) => {
        const name = orbit.classList.contains("asteroid-belt-orbit")
          ? "Asteroid"
          : "Kuiper";
        showInfo(name + " Belt", beltData[name]);
      });

      beltContainer.appendChild(rock);
    }

    beltContainer.style.position = "absolute";
    beltContainer.style.top = 0;
    beltContainer.style.left = 0;
    beltContainer.style.width = "100%";
    beltContainer.style.height = "100%";
    beltContainer.style.borderRadius = "50%";
    beltContainer.style.animation = `rotate-belt ${belt.duration}s linear infinite`;
  });

  document.querySelectorAll(".planet").forEach((planet) => {
    planet.addEventListener("click", (e) => {
      e.stopPropagation();
      const name = planet.dataset.planet;
      showInfo(name, planetData[name]);
    });
  });

  document.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("planet") &&
      !e.target.classList.contains("belt") &&
      !e.target.classList.contains("asteroid-fragment")
    ) {
      infoBox.style.display = "none";
    }
  });
});
