import useProcessando from "@/data/hooks/useProcessamento";

export default function Personagens() {
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando();

    async function simularChamadaAPI() {
        const resp = await fetch('https://swapi.dev/api/people/');
        const dados = await resp.json();
        console.log(dados.results);
    }


    async function obterPersonagens() {
        try {
            iniciarProcessamento();
            await simularChamadaAPI();
        } finally {
            finalizarProcessamento();
        }
    }

    return (
        <div>
            {processando ? (
                <div>processando...</div>
            ) : (
                <h1>Conteúdo com os personagens</h1>
            )}
            <button onClick={obterPersonagens} className={`botao`}>Obter</button>
        </div>
    );
}

