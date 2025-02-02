import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";

export default function Modal(props) {
  const {
    open,
    openHandler,
    title,
    text,
    leftButtonConfig,
    rightButtonConfig,
  } = props;

  let leftButton = <></>;
  if (leftButtonConfig?.onClick?.data?.linkType === "external")
    leftButton = (
      <a
        target={leftButtonConfig.onClick.data.sameTab ? "_self" : "_blank"}
        rel="noreferrer"
        href={leftButtonConfig.onClick.data.link}
      >
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-blue-600 hover:border-blue-700 shadow-sm px-4 py-2 outline-none bg-blue-700 text-base font-medium text-white hover:bg-blue-800 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => openHandler(false)}
        >
          {leftButtonConfig.text}
        </button>
      </a>
    );
  if (leftButtonConfig?.onClick?.data?.linkType === "internal")
    leftButton = (
      <Link to={leftButtonConfig.onClick.data.link}>
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-blue-600 hover:border-blue-700 shadow-sm px-4 py-2 outline-none bg-blue-700 text-base font-medium text-white hover:bg-blue-800 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => openHandler(false)}
        >
          {leftButtonConfig.text}
        </button>
      </Link>
    );

  let rightButton = <></>;
  if (rightButtonConfig?.onClick?.data?.linkType === "external")
    rightButton = (
      <a
        target={rightButtonConfig.onClick.data.sameTab ? "_self" : "_blank"}
        rel="noreferrer"
        href={rightButtonConfig.onClick.data.link}
      >
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-blue-600 hover:border-blue-700 shadow-sm px-4 py-2 outline-none bg-blue-700 text-base font-medium text-white hover:bg-blue-800 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => openHandler(false)}
        >
          {rightButtonConfig.text}
        </button>
      </a>
    );
  if (rightButtonConfig?.onClick?.data?.linkType === "internal")
    rightButton = (
      <Link to={rightButtonConfig.onClick.data.link}>
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-blue-600 hover:border-blue-700 shadow-sm px-4 py-2 outline-none bg-blue-700 text-base font-medium text-white hover:bg-blue-800 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => openHandler(false)}
        >
          {rightButtonConfig.text}
        </button>
      </Link>
    );

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => openHandler(false)}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-gray-800 border-2 border-gray-900 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FontAwesomeIcon
                      className="h-6 w-6 text-blue-600"
                      icon={faArrowAltCircleDown}
                      size="2x"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-100"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-300">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse sm:justify-between">
                {leftButtonConfig && leftButton}
                {rightButtonConfig && rightButton}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
