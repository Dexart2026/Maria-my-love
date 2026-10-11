const M=[
 {k:'o começo',t:'Roblox, música e você',d:'11 de agosto',s:'Eu estava com a música tocando no chat de voz quando você apareceu. Você gostou do meu gosto musical e, sem a gente planejar nada, foi ali que a nossa história começou.',c:[]},
 {k:'naquela mesma noite',t:'Eu te chamei',d:'11 de agosto, 21h26',s:'Te chamei no Instagram e, na primeira meia hora, você já me disse isso:',c:[['a','Acertei a pessoa?'],['m','sim'],['m','arrumei um amigo vey 🥰 futuro namorado? quem sabe']]},
 {k:'o primeiro',t:'Te amo',d:'15 de agosto',s:'Eu não consegui segurar. Falei primeiro, e você me respondeu:',c:[['a','Te amo'],['m','te amo tmbm ❤️']]},
 {k:'a promessa',t:'Eu falei sério',d:'16 de agosto',s:'Eu quis que você soubesse que eu levava a gente a sério:',c:[['a','A gente vai oficializar isso, eu prometo. Quero MT isso, quero ser melhor pra vc, quero que eu seja digno pra ti 💓'],['a','Eu choraria muito de felicidade em um casamento, vendo minha noiva. 🫵🏻❤️'],['m','era meu sonho tmbm']]},
 {k:'o pedido',t:'Eu te avisei',d:'25 de agosto',s:'Eu avisei que o pedido estava chegando:',c:[['a','eu vou te pedir em namoro meu amor']]},
 {k:'mesmo de longe',t:'Você me disse isso',d:'31 de agosto',s:'Teve uma noite em que você me disse uma coisa que eu guardei:',c:[['m','vc tá melhorando minha vida tá, mesmo q esteja longe']]},
 {k:'ficou oficial',t:'2 de setembro',d:'2 de setembro',s:'No dia em que a gente oficializou, você me contou como me enxerga. Eu li isso várias vezes:',c:[['m','gostando, ç é mó lindo gato, gostoso, gente boa dms, conversa bem, tem os mesmos gostos q eu, é mt inteligente tmbm']]},
 {k:'o meu sonho',t:'Você não me deixou desistir',d:'3 de setembro',s:'Quando eu te contei do meu sonho, você fez questão de me apoiar:',c:[['m','desiste do teu sonho nn amor']]},
 {k:'no Minecraft',t:'Até o casamento você planejou',d:'3 de setembro',s:'E você já tinha até o nosso casamento planejado:',c:[['m','vms fzr ele construir a igreja pra nos casar no mine']]},
 {k:'saudade',t:'Um dia sem você',d:'6 de setembro',s:'Eu sempre quis que você soubesse como é pra mim:',c:[['a','Só de passar um dia sem ver já me dá saudades']]},
 {k:'a minha decisão',t:'Eu não vou desistir',d:'8 de setembro',s:'E eu te disse isso com todas as letras:',c:[['a','Se for necessário eu deixar pessoa, gostos, meu orgulho, eu vou fazer de tudo pra estar aqui pra ti. Não vou desistir de você ❤️']]},
 {k:'o futuro',t:'Eu imagino a gente',d:'16 de setembro',s:'Teve uma noite em que eu escrevi o que eu sinto de verdade:',c:[['a','Quando eu gosto de alguém é pra casar, pra viver uma vida inteira. Eu fico imaginando o futuro com você ❤️'],['a','Eu não quero conhecer mais ninguém, se for eu espero o tempo que for pra te ver meu amor']]},
 {k:'quando a gente se encontrar',t:'O seu look',d:'25 de setembro',s:'Você já está pensando no dia em que a gente vai se ver, e eu penso nisso todos os dias:',c:[['m','mas eu já tenho um look pra te ver, talvez um vestido tubinho vermelho']]},
 {k:'nossos planos',t:'Você quer casar comigo',d:'3 de outubro',s:'E você me disse isso, e eu fiquei o dia inteiro sorrindo:',c:[['m','eu sei q agr eu tenho vc né, quero realmente me casar com vc']]},
 {k:'gratidão',t:'Obrigado por estar aqui',d:'6 de outubro',s:'Eu quis te agradecer, porque é verdade:',c:[['a','Obrigado por estar do meu lado assim, quero isso pro resto da minha vida ❤️']]},
 {k:'flores azuis',t:'O seu sonho',d:'10 de outubro',s:'Você me contou um sonho com a sua cor favorita. Eu quero estar nesse campo azul com você um dia:',c:[['m','meu sonho é fzr um vídeo assim, em um campo com essas flores azuis...e por esse mesmo filtro']]}
];
const st=document.getElementById('story');
M.forEach(m=>{
  const e=document.createElement('section');
  let h='<div class="wrap rv"><p class="kicker">'+m.k+'</p><h2>'+m.t+'</h2><p class="date">'+m.d+'</p><p class="says">'+m.s+'</p>';
  if(m.c.length){h+='<div class="chat">';let last='';
    m.c.forEach(x=>{if(x[0]!==last){h+='<div class="who '+x[0]+'">'+(x[0]==='a'?'eu':'você')+'</div>';last=x[0];}
      h+='<div class="b '+x[0]+'">'+x[1]+'</div>';});
    h+='</div>';}
  e.innerHTML=h+'</div>';st.appendChild(e);
});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)x.target.classList.add('on');}),{threshold:.15});
document.querySelectorAll('.rv').forEach(n=>io.observe(n));
const bar=document.getElementById('bar');
addEventListener('scroll',()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';},{passive:true});
const btn=document.getElementById('mbtn'),pn=document.getElementById('mpanel');
btn.onclick=()=>pn.classList.toggle('open');