"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[510],{51088:e=>{e.exports=JSON.parse('{"functions":[{"name":"Set","desc":"Sets the value at a specific key.","params":[{"name":"key","desc":"","lua_type":"string"},{"name":"value","desc":"","lua_type":"any"}],"returns":[],"function_type":"method","source":{"line":63,"path":"src/Observables/StateRecord.luau"}},{"name":"Current","desc":"Gets the current value at a specific key, or the current value of the whole\\nrecord if no first argument is provided.\\n\\n:::caution\\nCurrently, the value returned by `StateRecord:Current()` with no first\\nparameter is mutable! Modifying this value directly may cause unexpected\\nbehavior!\\n:::","params":[{"name":"key","desc":"","lua_type":"any?"}],"returns":[{"desc":"","lua_type":"any | T"}],"function_type":"method","source":{"line":110,"path":"src/Observables/StateRecord.luau"}},{"name":"Index","desc":"Creates a new observable which observes only a specific key within the\\nrecord. Changes in other keys will not affect subscribers to this indexed\\nstate.\\n\\nThe returned observable is also a State object, and setting values in this\\nstate will set values in the original Record object.","params":[{"name":"key","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"State<any>"}],"function_type":"method","source":{"line":203,"path":"src/Observables/StateRecord.luau"}}],"properties":[],"types":[],"name":"Record","desc":"#### Inherits [Observable]\\n\\nWriteable observable which holds a record table with predefined keys and\\nvalues.\\n\\nContains utility functions for observing and updating specific keys within\\nthis table, as well as cheaply oobserving specific keys within this table.\\n\\n*(Constructed via [Dec.Record])*","tags":["Observable"],"source":{"line":25,"path":"src/Observables/StateRecord.luau"}}')}}]);