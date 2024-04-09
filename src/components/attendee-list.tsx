  import { MoreHorizontal , ChevronsLeft, ChevronsRight, ChevronLeft, ChevronRight} from "lucide-react"

  export function AttendeeList() {
    return (
      <>
        <div className="flex flex-col gap-4">

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
                  <th className="py-3 px-4 text-sm text-semibold text-left"> <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10"/></th>
                  <th className="py-3 px-4 text-sm text-semibold text-left">Código</th>
                  <th className="py-3 px-4 text-sm text-semibold text-left">Participante</th>
                  <th className="py-3 px-4 text-sm text-semibold text-left">Data de Inscrição</th>
                  <th className="py-3 px-4 text-sm text-semibold text-left">Data do Check-in</th>
                  <th className="py-3 px-4 text-sm text-semibold text-left"></th>
                </tr>
              </thead>

              <tbody>
                {/* Exibindo itens repetidos sem precisar copiar várias vezes */}

                {Array.from({ length: 5 }).map((_, index) => {
                  return (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                      <td style={{width: 48}} className="py-3 px-4 text-sm text-zinc-300"> 
                          <input type="checkbox" className="size-4 bg-black/20 rounded border-white/10"/>
                      </td>
                      <td className="py-3 px-4 text-sm text-zinc-300"> 192945</td>
                      <td className="py-3 px-4 text-sm text-zinc-300">
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-white">Enzo Rodrigues</span>
                          <span>enzo.orodrigues03@gmail.com</span>
                        </div>
                        </td>
                      <td className="py-3 px-4 text-sm text-zinc-300"> 7 dias atrás </td>
                      <td className="py-3 px-4 text-sm text-zinc-300"> 7 dias atrás </td>
                      <td style={{width: 64}} className="py-3 px-4 text-sm text-zinc-300">
                        <button className="border border-white/10 rounded-md w-7 h-7 bg-black/20 flex items-center justify-center"> <MoreHorizontal className="w-4 h-4 text-white "/> </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>

              <tfoot>
                <tr>
                  <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>Mostrando 10 de 228 itens</td>
                  <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                  
                  <div className="inline-flex gap-8 items-center">
                      <span>Página 1 de 23</span>

                      <div className="flex gap-2">
                          <button className="border border-white/10 rounded-md w-7 h-7 bg-white/10 flex items-center justify-center"> <ChevronsLeft className="w-4 h-4 text-white "/> </button>
                          <button className="border border-white/10 rounded-md w-7 h-7 bg-white/10 flex items-center justify-center"> <ChevronLeft className="w-4 h-4 text-white "/> </button>
                          <button className="border border-white/10 rounded-md w-7 h-7 bg-white/10 flex items-center justify-center"> <ChevronRight className="w-4 h-4 text-white "/> </button>
                          <button className="border border-white/10 rounded-md w-7 h-7 bg-white/10 flex items-center justify-center"> <ChevronsRight className="w-4 h-4 text-white "/> </button>
                    </div>
                    
                  </div>
                
                  </td>

                  
                </tr>
              </tfoot>
            </table>

          </div>
          {/* Fim da Table */}


        </div>

      </>
    )

  }