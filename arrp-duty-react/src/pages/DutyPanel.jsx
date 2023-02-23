import DutyStartTime from "./DutyStartTime"

const DutyPanel = ({ StartTime }) => {


  return (
    <div>
      <div>
        <button>
          <a href="https://www.google.com/forms/about/" target="_blank">Hibabejelnetés</a>
        </button>
        <button>Kilépés</button>
      </div>
      <div>
        <p>Utolsó elindítás ideje:</p>{StartTime}
        <DutyStartTime />
        <p>Utolsó leadás ideje: 2023/01/01 00:00</p>
      </div>
    </div>
  )
}

export default DutyPanel
