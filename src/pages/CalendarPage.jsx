import { Calendar, Flex } from "antd";
import Forms from "../components/Forms";
import FormInput from "../components/FormInput";
import { Button } from "../components/Button";

export default function CalendarPage() {
   const onSelect = (newValue) => {
      console.log(`${newValue.$D}/${newValue.$M + 1}/${newValue.$y}`);
      console.log(newValue);
   }
   return (
      <div className="pt-30">
         <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-medium tracking-tight">Calendario de Citas</h1>
         </div>
         <div className="flex justify-center">
            <div className="max-w-150 md:max-w-160 grid grid-cols-1 xl:grid-cols-2 gap-2 md:gap-4 p-5">
               <Forms
                  className="order-2 md:order-1"
                  children={
                     <>
                        <FormInput label="Nombre*" type="text" />
                        <FormInput label="Hora*" type="time" />
                        <FormInput label="Teléfono*" type="tel" />
                        <Button type="submit" text="Enviar" />
                     </>
                  }
               />
               <div className="space-y-3 order-1">
                  <Flex className="border border-gray-300 rounded-2xl overflow-auto" vertical gap="medium">
                     <Calendar fullscreen={false} onSelect={onSelect} />
                  </Flex>
               </div>
            </div>
         </div>
      </div>
   )
}
