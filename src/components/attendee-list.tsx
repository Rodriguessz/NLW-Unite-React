
export function AttendeeList() {
  return (
    <>
      <div>

        {/* Header Table */}
        <div className="flex gap-5 items-center">
          <h1 className="text-2xl font-bold">Participantes</h1>
          <input type="text" placeholder="Buscar participante..." className=" w-[280px] bg-transparent border-[1px] border-zinc-800 pl-10 py-1.5 rounded-lg bg-[url('./assets/search.svg')] bg-left-search bg bg-no-repeat " />
        </div>
        {/* Fim Header Table */}


        {/* Table */}
        <div className="border border-white/10 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 px-2.5 text-sm text-semibold"> <input type="checkbox" /> </th>
                <th className="py-3 px-2.5 text-sm text-semibold">Código</th>
                <th className="py-3 px-2.5 text-sm text-semibold">Participante</th>
                <th className="py-3 px-2.5 text-sm text-semibold">Data de Inscrição</th>
                <th className="py-3 px-2.5 text-sm text-semibold">Data do Check-in</th>
                <th className="py-3 px-2.5 text-sm text-semibold"></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td> <input type="checkbox" /> </td>
                <td> 192945</td>
                <td>
                  <div className="flex flex-col items-start">
                    <span>Enzo Rodrigues</span>
                    <span>enzo.orodrigues03@gmail.com</span>
                  </div>
                </td>
                <td> 7 dias atrás </td>
                <td> 7 dias atrás </td>
                <td></td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td colSpan={3}>Mostrando 10 de 228 itens</td>
                <td colSpan={3}>Página 1 de 23</td>
              </tr>
            </tfoot>
          </table>

        </div>
        {/* Fim da Table */}


      </div>

    </>
  )

}