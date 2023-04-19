import React from 'react';
import { CheckMarkIcon } from '../Icons';

const ButtonColor = {
  sky: 'bg-sky-600 hover:bg-sky-500',
  gray: 'bg-gray-600 hover:bg-gray-500',
  blue: 'bg-blue-600 hover:bg-blue-500',
  red: 'bg-red-600 hover:bg-red-500',
  yellow: 'bg-yellow-600 hover:bg-yellow-500',
  green: 'bg-green-600 hover:bg-green-500',
  purple: 'bg-purple-600 hover:bg-purple-500',
  pink: 'bg-pink-600 hover:bg-pink-500',
  indigo: 'bg-indigo-600 hover:bg-indigo-500',
};

const TextColor = {
  sky: 'text-sky-50',
  gray: 'text-gray-50',
  blue: 'text-blue-50',
  red: 'text-red-50',
  yellow: 'text-yellow-50',
  green: 'text-green-50',
  purple: 'text-purple-50',
  pink: 'text-pink-50',
  indigo: 'text-indigo-50',
};

const HoverTextColor = {
  sky: 'hover:text-sky-100',
  gray: 'hover:text-gray-100',
  blue: 'hover:text-blue-100',
  red: 'hover:text-red-100',
  yellow: 'hover:text-yellow-100',
  green: 'hover:text-green-100',
  purple: 'hover:text-purple-100',
  pink: 'hover:text-pink-100',
  indigo: 'hover:text-indigo-100',
};

const Width = {
  sm: 'w-1/3',
  md: 'w-1/2',
  lg: 'w-full',
  none: '',
};

type ModelType = 'basic' | 'confirm' | 'alert';
type ButtonColorType = keyof typeof ButtonColor;
type ModalButtonColorType = keyof typeof ButtonColor;
type ModalButtonTextType = keyof typeof TextColor;
type TextColorType = keyof typeof TextColor;
type HoverTextColorType = keyof typeof HoverTextColor;
type WidthType = keyof typeof Width;

export interface BasicModelProps {
  title: string;
  message: string;
  modelType: ModelType;
  buttonColor: ButtonColorType;
  textColor: TextColorType;
  hoverTextColor: HoverTextColorType;
  width: WidthType;
  modalButtonColorType?: ModalButtonColorType;
  modalButtonTextType?: ModalButtonTextType;
  modalButtonTitle?: string;
  buttonTitle?: string;
}
export default function BasicModel({
  title,
  message,
  modelType,
  buttonColor,
  textColor,
  hoverTextColor,
  width,
  modalButtonColorType = 'sky',
  modalButtonTextType = 'sky',
  modalButtonTitle = 'Open Modal',
  buttonTitle = 'OK',
}: BasicModelProps) {
  const [show, setShow] = React.useState<boolean>(false);
  const [
    setWidth,
    setModelType,
    setButtonColor,
    setTextColor,
    setHoverTextColor,
    setModalButtonColor,
    setModalButtonText,
  ] = [
    Width[width],
    modelType,
    ButtonColor[buttonColor],
    TextColor[textColor],
    HoverTextColor[hoverTextColor],
    ButtonColor[modalButtonColorType],
    TextColor[modalButtonTextType],
  ];
  const handleCancel = () => {
    setShow(false);
  };
  const handleConfirm = () => {
    setShow(false);
  };
  const toggleShow = () => {
    setShow(!show);
  };

  switch (setModelType) {
    case 'confirm':
      return (
        <>
          <button
            type="button"
            onClick={toggleShow}
            className={`m-2 ${setModalButtonColor} ${setModalButtonText} font-bold py-2 px-4 rounded`}
          >
            {modalButtonTitle}
          </button>
          {show && (
            <div
              className="relative z-10"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <div
                    className={`relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 ${setWidth} text-left shadow-xl transition-all sm:my-8 sm:p-6`}
                  >
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckMarkIcon />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          {title}
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">{message}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className={`inline-flex w-full justify-center rounded-md ${setButtonColor} px-3 py-2 text-sm font-semibold ${setTextColor} ${setHoverTextColor} shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                        onClick={toggleShow}
                      >
                        {buttonTitle}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    case 'basic':
      return (
        <>
          <button
            onClick={toggleShow}
            className={`m-2 ${setModalButtonColor} ${setModalButtonText} font-bold py-2 px-4 rounded`}
          >
            {modalButtonTitle}
          </button>
          {show && (
            <div
              className="relative z-10"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <div
                    className={`relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all ${setWidth} sm:my-8 sm:p-6`}
                  >
                    <div>
                      <div className="mt-3 text-center sm:mt-5">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          {title}
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">{message}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="button"
                        className={`inline-flex w-full justify-center rounded-md ${setButtonColor} px-3 py-2 text-sm font-semibold ${setTextColor} ${setHoverTextColor} shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                        onClick={handleCancel}
                      >
                        {buttonTitle}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
    case 'alert':
      return (
        <>
          <button
            onClick={toggleShow}
            className={`m-2 ${setModalButtonColor} ${setModalButtonText} font-bold py-2 px-4 rounded`}
          >
            {modalButtonTitle}
          </button>
          {show && (
            <div
              className="relative z-10"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <div
                    className={`relative transform overflow-hidden ${setWidth} rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6`}
                  >
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-red-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          {title}
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">{message}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={toggleShow}
                      >
                        {buttonTitle}
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={toggleShow}
                      >
                        {'Cancel'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      );
  }
}
