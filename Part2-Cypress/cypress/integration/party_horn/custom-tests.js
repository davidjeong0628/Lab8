describe("Party Horn Tests", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
  });

  it("First Test", () => {
    expect(true).to.equal(true);
  });

  it("Slider changes when volume input changes", () => {
    cy.get("#volume-number").clear().type("75");
    cy.get("#volume-slider").then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it("Volume input changes when slider changes", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#volume-number").then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it("Volume of <audio> changes when slider changes", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.prop("volume", 0.33);
    });
  });

  it("Image and sound sources change when party horn radio is selected", () => {
    cy.get("#radio-party-horn").click();
    cy.get("#sound-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/images/party-horn.svg");
    });
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/audio/party-horn.mp3");
    });
  });

  it("Volume image changes when increasing volumes (level 0)", () => {
    const volumeNumber = cy.get("#volume-number");

    volumeNumber.clear().type("0");
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-0.svg"
      );
    });
  });

  it("Volume image changes when increasing volumes (level 1)", () => {
    const volumeNumber = cy.get("#volume-number");

    volumeNumber.clear().type("1");
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-1.svg"
      );
    });
  });

  it("Volume image changes when increasing volumes (level 2)", () => {
    const volumeNumber = cy.get("#volume-number");

    volumeNumber.clear().type("34");
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-2.svg"
      );
    });
  });

  it("Volume image changes when increasing volumes (level 3)", () => {
    const volumeNumber = cy.get("#volume-number");

    volumeNumber.clear().type("67");
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-3.svg"
      );
    });
  });

  it("Honk button is disabled when the textbox input is an empty or a non-number", () => {
    cy.get("#volume-number").clear();
    cy.get("#honk-btn").then(($el) => {
      expect($el).to.have.prop("disabled", true);
    });

    cy.get("#volume-number").clear().type("non-number");
    cy.get("#honk-btn").then(($el) => {
      expect($el).to.have.prop("disabled", true);
    });
  });
});
