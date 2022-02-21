import { Button, DatePicker, version } from "antd";

const Test = () => {
  return (
    <div>
      <h1>antd version: {version}</h1>
      <DatePicker />
      <Button type="primary" className="bg-red-500 px-4 py-2 hover:bg-red-700">
        Primary Button
      </Button>
    </div>
  );
};

export default Test;
