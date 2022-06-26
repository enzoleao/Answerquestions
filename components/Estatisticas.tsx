import styles from '../styles/Estatisticas.module.css'

interface EstatisticasProps{
    valor:any
    texto:string
    corFundo?:string
    corFonte?:string    
}

export default function Estatisticas (props: EstatisticasProps){
    return (
        <div className={styles.Estatisticas}>
            <div className={styles.valor} style={{
                backgroundColor:props.corFundo?? '#FDD60F', color: props.corFonte?? '#333'
            }}>
             {props.valor}
            </div>
            <div className={styles.texto}>
                  {props.texto}
            </div>
        </div>
    )
}