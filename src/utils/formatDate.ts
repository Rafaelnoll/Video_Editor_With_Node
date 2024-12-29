export default function formatDate(date: Date){
  if(!date) return;

  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}
