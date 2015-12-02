# loopback-method-description-mixin
https://stackoverflow.com/questions/34012906/how-do-you-change-the-parameter-description-in-strongloop

## Example Config


### your-model.json
```json
{
  "name": "YourModel",
  "mixins": {
    "CustomDescription": {
      "descriptions": {
        "deleteById": "My New Description for deleteById",
        "findById": "My New Description for findById"
      }
    }
  }
}
```