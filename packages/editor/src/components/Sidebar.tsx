import { useEditor } from "@craftjs/core";
import { UserComponents } from '@low-code/components';

const Sidebar = () => {
  const { connectors } = useEditor();
  const { Button } = UserComponents;
  return (
    <div>
      <div ref={(ref: any) => connectors.create(ref, <Button type="primary" text="Click me" />)}>
        <span className="ml-2">按钮</span>
      </div>
    </div>
  )
}

export default Sidebar;
