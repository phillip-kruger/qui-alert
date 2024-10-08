# qui-alert
Alert component based on Lit that looks like the Bootstrap alert

## Installation

```bash
npm i @qomponent/qui-alert
```

## Usage

```javascript
import '@qomponent/qui-alert';
```

```html
<qui-alert><span>Info alert</span></qui-alert>
<qui-alert level="success"><span>Success alert</span></qui-alert>
<qui-alert level="warning"><span>Warning alert</span></qui-alert>
<qui-alert level="error"><span>Error alert</span></qui-alert>

<qui-alert permanent><span>Permanent Info alert</span></qui-alert>
<qui-alert level="success" permanent><span>Permanent Success alert</span></qui-alert>
<qui-alert level="warning" permanent><span>Permanent Warning alert</span></qui-alert>
<qui-alert level="error" permanent><span>Permanent Error alert</span></qui-alert>

<qui-alert center><span>Center Info alert</span></qui-alert>
<qui-alert level="success" center><span>Center Success alert</span></qui-alert>
<qui-alert level="warning" center><span>Center Warning alert</span></qui-alert>
<qui-alert level="error" center><span>Center Error alert</span></qui-alert>

<qui-alert showIcon><span>Info alert with icon</span></qui-alert>
<qui-alert level="success" showIcon><span>Success alert with icon</span></qui-alert>
<qui-alert level="warning" showIcon><span>Warning alert with icon</span></qui-alert>
<qui-alert level="error" showIcon><span>Error alert with icon</span></qui-alert>

<qui-alert icon="vaadin:flag-checkered"><span>Info alert with custom icon</span></qui-alert>
<qui-alert level="success" icon="vaadin:flag-checkered"><span>Success alert with custom icon</span></qui-alert>
<qui-alert level="warning" icon="vaadin:flag-checkered"><span>Warning alert with custom icon</span></qui-alert>
<qui-alert level="error" icon="vaadin:flag-checkered"><span>Error alert with custom icon</span></qui-alert>

<qui-alert size="small" showIcon><span>Small Info alert with icon</span></qui-alert>
<qui-alert level="success" size="small" showIcon><span>Small Success alert with icon</span></qui-alert>
<qui-alert level="warning" size="small" showIcon><span>Small Warning alert with icon</span></qui-alert>
<qui-alert level="error" size="small" showIcon><span>Small Error alert with icon</span></qui-alert>

<qui-alert showIcon><span>Info <code>alert</code> with markup <br><a href="https://quarkus.io/" target="_blank">quarkus.io</a></span></qui-alert>
<qui-alert level="success" showIcon><span>Success <code>alert</code> with markup <br><a href="https://quarkus.io/" target="_blank">quarkus.io</a></span></qui-alert>
<qui-alert level="warning" showIcon><span>Warning <code>alert</code> with markup <br><a href="https://quarkus.io/" target="_blank">quarkus.io</a></span></qui-alert>
<qui-alert level="error" showIcon><span>Error <code>alert</code> with markup <br><a href="https://quarkus.io/" target="_blank">quarkus.io</a></span></qui-alert>

<qui-alert showIcon primary><span>Primary Info alert with icon</span></qui-alert>
<qui-alert level="success" showIcon primary><span>Primary Success alert with icon</span></qui-alert>
<qui-alert level="warning" showIcon primary><span>Primary Warning alert with icon</span></qui-alert>
<qui-alert level="error" showIcon primary><span>Primary Error alert with icon</span></qui-alert>

<qui-alert title="Information"><span>Info alert with title</span></qui-alert>
<qui-alert title="Well done" level="success"><span>Success alert with title</span></qui-alert>
<qui-alert title="Beware" level="warning"><span>Warning alert with title</span></qui-alert>
<qui-alert title="Ka-boom" level="error"><span>Error alert with title</span></qui-alert>

<qui-alert title="Information" showIcon><span>Info alert with title and icon</span></qui-alert>
<qui-alert title="Well done" level="success" showIcon><span>Success alert with title and icon</span></qui-alert>
<qui-alert title="Beware" level="warning" showIcon><span>Warning alert with title and icon</span></qui-alert>
<qui-alert title="Ka-boom" level="error" showIcon><span>Error alert with title and icon</span></qui-alert>
```

## Example

To run the example:

```bash
npm install
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[Apache 2](http://www.apache.org/licenses/LICENSE-2.0)
