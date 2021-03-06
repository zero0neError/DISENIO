function accionPlay()
{
  if(!medio.paused && !medio.ended) 
  {
    medio.pause();
    play.value='\u25BA'; //\u25BA
    document.body.style.backgroundColor = '#fff';
  }
  else
  {
    medio.play();
    play.value='||';
    document.body.style.backgroundColor = 'grey';
  }
}
function accionReiniciar()
{
  medio.currentTime=0;
  play.value='||';
  medio.play();
  
}
function accionRetrasar()
{
  //Usar propiedad .curentTime
  //Contemplar que no existen valores negativos
  if(medio.currentTime>0){

    medio.currentTime-=5;
  }
}
function accionAdelantar()
{
  medio.currentTime+=5;
}
function accionSilenciar()
{

    (medio.muted)?medio.muted=!medio.muted:medio.muted=!medio.muted;
    (silenciar.value=="silenciar")?silenciar.value="escuchar":silenciar.value="silenciar";
    
  //Utilizar medio.muted = true; o medio.muted = false;
}
function accionMasVolumen()
{
  //Contemplar que el valor máximo de volumen es 1
  
  if(medio.volume>=0 && medio.volume<1){
    
      aux=medio.volume;
      medio.volume=medio.volume+0.1;
      
      if(medio.volume>1){
        medio.volume=aux;
      }
  }
}
function accionMenosVolumen()
{
  //Contemplar que el valor mínimo de volumen es 0
  
  if(medio.volume>0){

    medio.volume=medio.volume-0.1;

    if(medio.volume<0.1){

        medio.volume=0;
    }
  }
}

function iniciar() 
{
  
  medio=document.getElementById('medio');
  play=document.getElementById('play');
  reiniciar=document.getElementById('reiniciar');
  retrasar=document.getElementById('retrasar');
  adelantar=document.getElementById('adelantar');
  silenciar=document.getElementById('silenciar');

  play.addEventListener('click', accionPlay);
  reiniciar.addEventListener('click', accionReiniciar);
  retrasar.addEventListener('click', accionRetrasar);
  adelantar.addEventListener('click', accionAdelantar);
  silenciar.addEventListener('click', accionSilenciar);
  menosVolumen.addEventListener('click', accionMenosVolumen);
  masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);