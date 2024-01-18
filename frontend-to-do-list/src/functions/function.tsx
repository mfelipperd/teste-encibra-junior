export function formatData(data: string): string {
    const dataFormatada = new Date(data);
    const dia = String(dataFormatada.getDate()).padStart(2, '0');
    const mes = String(dataFormatada.getMonth() + 1).padStart(2, '0'); // Os meses começam do zero
    const ano = dataFormatada.getFullYear();
  
    return `${dia}/${mes}/${ano}`;
  }