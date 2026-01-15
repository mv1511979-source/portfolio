let domain=document.querySelector("#domain");
let domains = [
  "Web Development.",
  "App Development.",
  "Frontend Development.",
  "Software Development."
];
let reversetype=false;
let x=domains[Math.floor(Math.random()*domains.length)];
let i=0;
let word;
let j=0;
setInterval(()=>
{
  if(j==4)
  {
    j=0;
  }
word=domains[j];
  if(!reversetype)
  {
domain.innerText=domain.innerText+word[i];
    i++;
  }
  else
  {
    domain.innerText=word.slice(0,domain.innerText.length-1);
    i--;
  }
  if(i==word.length)
  {
    reversetype=true;
    
  }
  if(i==0 && reversetype)
  {
reversetype=false;
i=0;
j++;
}
    
},200)


