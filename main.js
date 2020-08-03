function Enviar() {
    const nome = $("#nome").val();
    $("form").hide();
    $('.start-form').html(`
        <h3>${nome}, formulário enviado com sucesso!</h3>
    `)
}

$('#personagem-carrosel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: `
    <div class="slick-prev col-1 arrow">
        <div class="seta"><</div>
    </div>
    `,
    nextArrow: `
    <div class="slick-next col-1 arrow">
      <div class="seta">></div>
    </div>`,
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
                swipeToSlide: true
            }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            swipeToSlide: true
          }
        }
    ]
});
