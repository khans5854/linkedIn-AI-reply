import type { FC, PropsWithoutRef } from "react"

import type { IResponse } from "../types"

export const ResponseList: FC<PropsWithoutRef<{ responses: IResponse[] }>> = ({
  responses
}) => {
  return responses.map((response, index: number) => (
    <div key={index} className="flex flex-col gap-4 pb-4">
      <p className="text-2xl self-end max-w-[70%] min-w-[40%] w-fit p-2 px-4 rounded-lg bg-gray-200 text-gray-500">
        {response.prompt}
      </p>
      <p className="text-2xl max-w-[75%] min-w-[40%] p-2 px-4 bg-primary-light rounded-lg text-gray-500">
        {response.response}
      </p>
    </div>
  ))
}
