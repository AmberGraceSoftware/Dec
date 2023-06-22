"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[734],{41755:e=>{e.exports=JSON.parse('{"functions":[{"name":"Start","desc":"Starts the Stopwatch Observable. The observable will update with new\\nvalues every heartbeat in real-time until it is stopped.","params":[],"returns":[],"function_type":"method","source":{"line":17,"path":"src/Observables/BaseTimer.luau"}},{"name":"Stop","desc":"Stops the Stopwatch Observable.","params":[],"returns":[],"function_type":"method","source":{"line":37,"path":"src/Observables/BaseTimer.luau"}},{"name":"Pause","desc":"Pauses the Stopwatch Observable.","params":[],"returns":[],"function_type":"method","source":{"line":55,"path":"src/Observables/BaseTimer.luau"}},{"name":"Pause","desc":"Sets the current elapsed time of the Stopwatch.","params":[],"returns":[],"function_type":"method","source":{"line":83,"path":"src/Observables/BaseTimer.luau"}},{"name":"CurvedAlpha","desc":"Creates a new Alpha Observable that interpolates between 0 and one using\\nthe given easing style and direction. Useful for creating non-linear\\nanimations.","params":[],"returns":[{"desc":"","lua_type":"Alpha"}],"function_type":"method","source":{"line":116,"path":"src/Observables/BaseTimer.luau"}},{"name":"SliceAlpha","desc":"Creates a new Alpha Observable that starts at startTime\\n(maps to 0) and ends at endTime (maps to 1).\\n\\nUseful for slicing up animation sequences into smaller slices.","params":[],"returns":[{"desc":"","lua_type":"Alpha"}],"function_type":"method","source":{"line":147,"path":"src/Observables/BaseTimer.luau"}},{"name":"Alpha","desc":"Derives an Alpha observable object that maps the current remaining time from\\n0 (start) to 1 (finish)","params":[],"returns":[{"desc":"","lua_type":"Alpha"}],"function_type":"method","source":{"line":56,"path":"src/Observables/Timer.luau"}},{"name":"Lerp","desc":"Creates an observable that outputs an interpolated value between\\nthe start value and end value based on the current remaining time.","params":[],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"method","source":{"line":79,"path":"src/Observables/Timer.luau"}},{"name":"Alpha","desc":"Derives an Alpha observable object that maps the elasped time from 0 (start)\\nto 1 (finish)","params":[],"returns":[{"desc":"","lua_type":"Alpha"}],"function_type":"method","source":{"line":56,"path":"src/Observables/Stopwatch.luau"}},{"name":"Lerp","desc":"Creates an observable that outputs an interpolated value between\\nthe start value and end value based on the current elapsed time.","params":[],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"method","source":{"line":68,"path":"src/Observables/Stopwatch.luau"}}],"properties":[],"types":[],"name":"Stopwatch","desc":"#### Inherits [Observable]\\n\\nObservable which counts up to a max value in realtime whenever played\\nvia [Timer:Start].\\n\\nIncludes utility methods for mapping this \\"elapsed time\\" value into more\\ncomplex animationed sequences.\\n\\n*(Constructed via [Dec.Stopwatch])*","tags":["Observable"],"source":{"line":29,"path":"src/Observables/Stopwatch.luau"}}')}}]);