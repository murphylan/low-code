
import { useNode } from '@craftjs/core';
import { ButtonProps } from './Button';

export const ButtonSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props
  }));

  return (
    <div>
      <h3>Button Settings</h3>
      <label>
        Type:
        <select
          value={props.type}
          onChange={(e) => setProp((props: ButtonProps) => props.type = e.target.value as ButtonProps['type'])}
        >
          <option value="default">Default</option>
          <option value="primary">Primary</option>
          <option value="dashed">Dashed</option>
          <option value="link">Link</option>
        </select>
      </label>
      <br />
      <label>
        Text:
        <input
          type="text"
          value={props.text}
          onChange={(e) => setProp((props: ButtonProps) => props.text = e.target.value)}
        />
      </label>
    </div>
  );
};