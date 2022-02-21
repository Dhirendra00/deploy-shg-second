import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { FieldHookConfig, useField } from "formik";
import { Fragment } from "react";

interface OtherProps {
  data: {
    id?: number | string;
    label: string;
    code?: string;
    provinceId?: number;
    districtCode?: string;
  }[];
}

type SelectProps = OtherProps & FieldHookConfig<string>;

export const Select: React.FC<SelectProps> = (
  props: OtherProps & FieldHookConfig<string>
) => {
  const [field, meta, helpers] = useField(props);

  return (
    <Fragment>
      <div className="w-full z-30 text-lg">
        <Listbox value={meta.value} onChange={helpers.setValue}>
          <Listbox.Label className="text-lg font-semibold text-gray-700 capitalize">
            {field.name}
          </Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full py-4 px-6 text-left ring-1 ring-gray-700 ring-opacity-20 bg-white rounded-sm shadow-E500 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-blue-300 focus-visible:ring-offset-2 focus-visible:border-blue-500">
              <span className="block truncate capitalize">
                {meta.value === "" ? `Select ${field.name}` : meta.value}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="z-50 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none ">
                {props.data.map((item, itemIdx) => (
                  <Listbox.Option
                    key={itemIdx}
                    className={({ active }) =>
                      `${active ? "text-blue-900 bg-blue-100" : "text-gray-900"}
                              cursor-default select-none relative py-4 pl-10 pr-4`
                    }
                    value={item.label}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? "font-medium" : "font-normal"
                          } block truncate text-lg`}
                        >
                          {item.label}
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? "text-blue-600" : "text-blue-600"
                            }
                                    absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </Fragment>
  );
};
