// Minimal image loader: loads chosen image into a canvas
const input = document.getElementById('imageInput');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext && canvas.getContext('2d');

if (!ctx) {
  document.querySelector('.note').textContent = 'Din webbläsare stödjer inte canvas.';
}

input.addEventListener('change', (e)=>{
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const img = new Image();
  img.onload = ()=>{
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img,0,0);
  };
  img.onerror = ()=> alert('Kunde inte läsa bilden.');
  img.src = URL.createObjectURL(file);
});

// Placeholder for future image-editing functions (brightness/contrast, filters etc.)
