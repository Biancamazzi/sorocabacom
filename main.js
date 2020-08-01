function Enviar() {
    const nome = $("#nome").val();
    $("form").hide();
    $('.start-form').html(`
        <h3>${nome}, formulário enviado com sucesso!</h3>
    `)
}