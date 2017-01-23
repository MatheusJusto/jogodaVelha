var rodada = 1;
var matrizJogo = Array(3);

matrizJogo['a'] = Array(3);
matrizJogo['b'] = Array(3);
matrizJogo['c'] = Array(3);

matrizJogo['a'][1] = 0;
matrizJogo['a'][2] = 0;
matrizJogo['a'][3] = 0;

matrizJogo['b'][1] = 0;
matrizJogo['b'][2] = 0;
matrizJogo['b'][3] = 0;

matrizJogo['c'][1] = 0;
matrizJogo['c'][2] = 0;
matrizJogo['c'][3] = 0;


$(document).ready(function() {
	$('#btnIniciar').click( function(){

		//valida digitação jogadores

		if($('#player1').val() == '') {
			alert('Apelido player 1 não inserido');
			return false;
		}
		if($('#player2').val() == '') {
			alert('Apelido player 2 não inserido');
			return false;
			
		}
		
		//exibe nome jogadores

		$('#nomePlayer1').html($('#player1').val());
		$('#nomePlayer2').html($('#player2').val());

		//setando a visualização do palco

		$('#inicialPage').hide();
		$('#stageGame').show();
	});

	$('.jogada').click( function() {
		var campoClicado = this.id;
		$('#'+campoClicado).off();
		jogada(campoClicado);
	});

	function jogada(id) {
		var icone = '';
		var ponto = 0;

		if((rodada % 2) == 1) {
			icone = 'url("imagens/marcacao_1.png")';
			ponto = -1;
		}
		else {
			icone = 'url("imagens/marcacao_2.png")';
			ponto = 1;
		};

		rodada++;


		$('#'+id).css('background-image', icone);
		$('#'+id).css('background-repeat', 'no-repeat');

		var linhaColuna = id.split('-');


		matrizJogo[linhaColuna[0]][linhaColuna[1]] = ponto;

		verificaCombinacao();

	};

	function verificaCombinacao() {
		//verifica Horzontal
		var pontos = 0;
		for(var i = 1; i <= 3; i++) {
			pontos += matrizJogo['a'][i];
		}
		ganhador(pontos)

		pontos = 0;
		for(var i = 1; i <= 3; i++) {
			pontos += matrizJogo['b'][i];
		}
		ganhador(pontos)

		pontos = 0;
		for(var i = 1; i <= 3; i++) {
			pontos += matrizJogo['c'][i];
		}
		ganhador(pontos);
		

		//verifica vertical

		
		for(var i = 0; i <=3; i++) {
			pontos = 0;
			pontos += matrizJogo['a'][1];
			pontos += matrizJogo['b'][1];
			pontos += matrizJogo['c'][1];

			ganhador(pontos);
		}
		
		for(var i = 0; i <=3; i++) {
			pontos = 0;
			pontos += matrizJogo['a'][2];
			pontos += matrizJogo['b'][2];
			pontos += matrizJogo['c'][2];

			ganhador(pontos);
		}

		for(var i = 0; i <=3; i++) {
			pontos = 0;
			pontos += matrizJogo['a'][3];
			pontos += matrizJogo['b'][3];
			pontos += matrizJogo['c'][3];

			ganhador(pontos);
		}

		//verificar diagonal

		pontos = 0;
		pontos = matrizJogo['a'][1] + matrizJogo['b'][2] + matrizJogo['c'][3];
		ganhador(pontos);

		pontos = 0;
		pontos = matrizJogo['c'][1] + matrizJogo['b'][2] + matrizJogo['a'][3];
		ganhador(pontos);
		
	}

	function ganhador(pontos) {

		var player1 = $('#player1').val();
		var player2 = $('#player2').val();
		if(pontos == -3) {
			alert(player1 +" é o vencedor");
			$('.jogada').off();
		}
		else if(pontos == 3) {
			alert(player1 +" é o vencedor");
			$('.jogada').off();
		}
	}
});

