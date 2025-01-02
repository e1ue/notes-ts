import { Button, Dialog, DialogPanel} from "@headlessui/react";
import { useState } from "react";
import { ClipboardDocumentListIcon, XMarkIcon } from "@heroicons/react/16/solid";

export default function DialogInfo() {
    
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="flex items-center space-x-[5px] px-[20px] py-[10px] border max-w-min rounded-[10px] select-none
                            hover:border-black/35 hover:bg-black/5 dark:hover:border-white/75 dark:hover:bg-white/10
                            border-black/25 dark:border-white/50"
      >
        <ClipboardDocumentListIcon
          width={20}
          height={20}
          className="dark:text-white text-black"
        />
        <p className="font-medium dark:text-white text-black">notes.ts</p>
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/65 text-white">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-[15px] bg-black border border-white/15 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="select-none">
                <div className="flex items-center justify-center space-x-[10px]">
                  <ClipboardDocumentListIcon
                    width={32}
                    height={32}
                    color="white"
                  />
                  <p className="font-semibold text-[32px]">notes.ts</p>
                </div>
                <p className="font-medium text-sm text-center text-white/75">
                  Ваши заметки
                </p>
                <hr className="border-white/15 my-6" />
              </div>

              <div className="space-y-[10px]">
                <p>
                  Относительно безопастные заметки. На сайте полностью
                  отсутствует серверная часть, все ваши данные хранятся у вас в
                  браузере (localStorage) и доступ к ним может получить только
                  Владелец. Они хранятся там, пока вы сами их не удалите.
                </p>
                <p>
                  Проект open source, исходный код можете посмотреть на странице
                  разработчика в{" "}
                  <a
                    href="https://github.com/e1ue/notes-ts"
                    className="text-purple-300 hover:underline"
                    target="_blank"
                  >
                    github
                  </a>
                  .
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/50 p-[10px] rounded-[10px] my-6">
                <p className="text-[#ffc0c0] text-[14px]">
                  Разработчик НЕ рекомендует хранить личную или важную для вас
                  информацию!
                </p>
              </div>

              <div className="mt-4 flex justify-end">
                <Button
                  className="flex justify-center items-center rounded-[10px] font-medium text-[14px] bg-purple-700 px-[20px] py-[12.5px] hover:bg-purple-600 leading-none"
                  onClick={close}
                >
                  <XMarkIcon width={18} hanging={18} className="mr-[2.5px]"/>
                  Закрыть окно
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
