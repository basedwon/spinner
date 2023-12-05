## Classes

<dl>
<dt><a href="#Progress">Progress</a> : <code><a href="#Progress">Progress</a></code></dt>
<dd><p>Progress bar class for command line interfaces.</p>
</dd>
<dt><a href="#Spinner">Spinner</a> : <code><a href="#Spinner">Spinner</a></code></dt>
<dd><p>Represents a spinner for command line interfaces.</p>
</dd>
</dl>

## Members

<dl>
<dt><a href="#spinner">spinner</a></dt>
<dd><p>A singleton instance of the Spinner class.
Useful for quick access when only one spinner is needed.</p>
</dd>
</dl>

<a name="Progress"></a>

## Progress : [<code>Progress</code>](#Progress)
Progress bar class for command line interfaces.

**Kind**: global class  

* [Progress](#Progress) : [<code>Progress</code>](#Progress)
    * [new Progress(opts)](#new_Progress_new)
    * _instance_
        * [.total](#Progress+total) ⇒ <code>number</code>
        * [.total](#Progress+total)
        * [.start([start])](#Progress+start)
        * [.increment(delta, [payload])](#Progress+increment)
        * [.update(value, [payload])](#Progress+update)
        * [.updateETA()](#Progress+updateETA)
        * [.setTotal(totalValue)](#Progress+setTotal)
        * [.stop()](#Progress+stop)
    * _static_
        * [.Progress](#Progress.Progress) ⇒ [<code>Progress</code>](#Progress)
        * [.cliProgress](#Progress.cliProgress) ⇒ <code>cliProgress</code>

<a name="new_Progress_new"></a>

### new Progress(opts)
Creates a new Progress instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| opts | <code>Object</code> |  | The options for the progress bar. |
| [opts.etaBuffer] | <code>number</code> | <code>2</code> | The buffer for ETA calculation. |
| [opts.clearOnComplete] | <code>boolean</code> | <code>false</code> | Whether to clear the progress bar on completion. |
| [opts.preset] | <code>string</code> | <code>&quot;&#x27;shades_classic&#x27;&quot;</code> | The preset style for the progress bar. |
| [opts.total] | <code>number</code> | <code>100</code> | The total value of the progress bar. |

<a name="Progress+total"></a>

### progress.total ⇒ <code>number</code>
Gets the total value of the progress bar.

**Kind**: instance property of [<code>Progress</code>](#Progress)  
**Returns**: <code>number</code> - The total value.  
<a name="Progress+total"></a>

### progress.total
Sets the total value of the progress bar.

**Kind**: instance property of [<code>Progress</code>](#Progress)  

| Param | Type | Description |
| --- | --- | --- |
| total | <code>number</code> | The total value to be set. |

<a name="Progress+start"></a>

### progress.start([start])
Starts the progress bar.

**Kind**: instance method of [<code>Progress</code>](#Progress)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | <code>number</code> | <code>0</code> | The initial value from which to start. |

<a name="Progress+increment"></a>

### progress.increment(delta, [payload])
Increments the current value of the progress bar.

**Kind**: instance method of [<code>Progress</code>](#Progress)  

| Param | Type | Description |
| --- | --- | --- |
| delta | <code>number</code> | The value by which to increment. |
| [payload] | <code>Object</code> | Additional payload information. |

<a name="Progress+update"></a>

### progress.update(value, [payload])
Updates the current value of the progress bar.

**Kind**: instance method of [<code>Progress</code>](#Progress)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | The value to which the progress bar will be updated. |
| [payload] | <code>Object</code> | Additional payload information. |

<a name="Progress+updateETA"></a>

### progress.updateETA()
Updates the estimated time of arrival (ETA).

**Kind**: instance method of [<code>Progress</code>](#Progress)  
<a name="Progress+setTotal"></a>

### progress.setTotal(totalValue)
Sets the total value of the progress bar.

**Kind**: instance method of [<code>Progress</code>](#Progress)  

| Param | Type | Description |
| --- | --- | --- |
| totalValue | <code>number</code> | The total value to be set. |

<a name="Progress+stop"></a>

### progress.stop()
Stops the progress bar and updates it to its total value.

**Kind**: instance method of [<code>Progress</code>](#Progress)  
<a name="Progress.Progress"></a>

### Progress.Progress ⇒ [<code>Progress</code>](#Progress)
Static getter for the Progress class itself. 
This can be useful when you need a reference to the class from a static method.

**Kind**: static property of [<code>Progress</code>](#Progress)  
**Returns**: [<code>Progress</code>](#Progress) - The Progress class.  
<a name="Progress.cliProgress"></a>

### Progress.cliProgress ⇒ <code>cliProgress</code>
Static getter for the cli-progress library.
This allows access to the cli-progress library from the Progress class without needing to import it separately.

**Kind**: static property of [<code>Progress</code>](#Progress)  
**Returns**: <code>cliProgress</code> - The cli-progress library.  
<a name="Spinner"></a>

## Spinner : [<code>Spinner</code>](#Spinner)
Represents a spinner for command line interfaces.

**Kind**: global class  

* [Spinner](#Spinner) : [<code>Spinner</code>](#Spinner)
    * [new Spinner([opts])](#new_Spinner_new)
    * _instance_
        * [.text](#Spinner+text)
        * [.start(text, [color])](#Spinner+start)
        * [.update(text, [color])](#Spinner+update)
        * [.succeed(text, [color])](#Spinner+succeed)
        * [.fail(text, [color])](#Spinner+fail)
    * _static_
        * [.spinner](#Spinner.spinner) ⇒ [<code>Spinner</code>](#Spinner)
        * [.Spinner](#Spinner.Spinner) ⇒ [<code>Spinner</code>](#Spinner)
        * [.Spinnies](#Spinner.Spinnies) ⇒ <code>Spinnies</code>
        * [.spins](#Spinner.spins) ⇒ [<code>Spinner</code>](#Spinner)
        * [.spin(opts)](#Spinner.spin) ⇒ [<code>Spinner</code>](#Spinner)

<a name="new_Spinner_new"></a>

### new Spinner([opts])
Creates an instance of Spinner.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [opts] | <code>Object</code> | <code>{}</code> | The options for the spinner. |
| [opts.id] | <code>string</code> | <code>&quot;&#x27;spinner&#x27;&quot;</code> | The unique identifier for the spinner. |
| [opts.color] | <code>string</code> | <code>&quot;&#x27;green&#x27;&quot;</code> | The color of the spinner. |
| [opts.succeedColor] | <code>string</code> |  | The color when spinner succeeds. Defaults to `opts.color`. |
| [opts.failColor] | <code>string</code> | <code>&quot;&#x27;redBright&#x27;&quot;</code> | The color when spinner fails. |
| [opts.spinner] | <code>string</code> | <code>&quot;&#x27;aesthetic&#x27;&quot;</code> | The spinner style. |

<a name="Spinner+text"></a>

### spinner.text
Sets the text of the spinner.

**Kind**: instance property of [<code>Spinner</code>](#Spinner)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | The new text to display. |

<a name="Spinner+start"></a>

### spinner.start(text, [color])
Starts the spinner with provided text and color.

**Kind**: instance method of [<code>Spinner</code>](#Spinner)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | The text to display alongside the spinner. |
| [color] | <code>string</code> | The color of the spinner. Defaults to the spinner's color. |

<a name="Spinner+update"></a>

### spinner.update(text, [color])
Updates the spinner's text and color.

**Kind**: instance method of [<code>Spinner</code>](#Spinner)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | The new text to display. |
| [color] | <code>string</code> | The new color of the spinner. Defaults to the spinner's color. |

<a name="Spinner+succeed"></a>

### spinner.succeed(text, [color])
Marks the spinner as successful.

**Kind**: instance method of [<code>Spinner</code>](#Spinner)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | The success message to display. |
| [color] | <code>string</code> | The color of the success message. Defaults to the spinner's succeedColor. |

<a name="Spinner+fail"></a>

### spinner.fail(text, [color])
Marks the spinner as failed.

**Kind**: instance method of [<code>Spinner</code>](#Spinner)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | The failure message to display. |
| [color] | <code>string</code> | The color of the failure message. Defaults to the spinner's failColor. |

<a name="Spinner.spinner"></a>

### Spinner.spinner ⇒ [<code>Spinner</code>](#Spinner)
Creates a new instance of Spinner.

**Kind**: static property of [<code>Spinner</code>](#Spinner)  
**Returns**: [<code>Spinner</code>](#Spinner) - A new Spinner instance.  
<a name="Spinner.Spinner"></a>

### Spinner.Spinner ⇒ [<code>Spinner</code>](#Spinner)
Returns the Spinner class.

**Kind**: static property of [<code>Spinner</code>](#Spinner)  
**Returns**: [<code>Spinner</code>](#Spinner) - The Spinner class.  
<a name="Spinner.Spinnies"></a>

### Spinner.Spinnies ⇒ <code>Spinnies</code>
Returns the Spinnies class.

**Kind**: static property of [<code>Spinner</code>](#Spinner)  
**Returns**: <code>Spinnies</code> - The Spinnies class.  
<a name="Spinner.spins"></a>

### Spinner.spins ⇒ [<code>Spinner</code>](#Spinner)
Gets the singleton instance of the Spinner.

**Kind**: static property of [<code>Spinner</code>](#Spinner)  
**Returns**: [<code>Spinner</code>](#Spinner) - The singleton instance of the Spinner.  
<a name="Spinner.spin"></a>

### Spinner.spin(opts) ⇒ [<code>Spinner</code>](#Spinner)
Creates and returns a new spinner with provided options.

**Kind**: static method of [<code>Spinner</code>](#Spinner)  
**Returns**: [<code>Spinner</code>](#Spinner) - A new Spinner instance.  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>Object</code> | The options to create a new spinner. |

<a name="spinner"></a>

## spinner
A singleton instance of the Spinner class.
Useful for quick access when only one spinner is needed.

**Kind**: global variable  
