ß = ()->
  class BetaBase
    constructor: (@value) ->
      @type = callToString(@value)
      
    is: (type) ->
      if type
        compareType @value, type
      else
        callToString @value
  class BetaString
    trim: ->
      @value.replace(/^\s\s*/, "").replace /\s\s*$/, ""
    isLower: ->
      /^[a-z0-9\s]+$/.test @value
    isUpper: ->
      /^[A-Z0-9\s]+$/.test @value
    isAlpha: ->
      /^[a-zA-Z\s]+$/.test @value
    isNum: ->
      /^[0-9]+$/.test @value
    isEmail: ->
      /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/.test @value
    isUrl: ->
      /^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|cat|coop|int|pro|tel|xxx|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2})?)|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/.test @value
    isIp: ->
      @isIpv4(@value) or @isIpv6(@value)
    isIpv4: ->
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test @value
    isIpv6: ->
      /(?:(?:[a-f\d]{1,4}:)*(?:[a-f\d]{1,4}|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(?:(?:[a-f\d]{1,4}:)*[a-f\d]{1,4})?::(?:(?:[a-f\d]{1,4}:)*(?:[a-f\d]{1,4}|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}))?)/.test @value
    isEmpty: ->
      @value.length is 0
  class BetaNumber
    round: (decimals) ->
      exp = Math.pow 10, decimals or 2
      Math.round (@value * exp) / exp
  class BetaObject
  class BetaArray
  class BetaDate
  class BetaRegexp
    
  callToString = (anything, length) ->
    result = Object::toString.call(anything)
      .replace(/\[object |\]/g, "")
      .toLowerCase()
    (if (not length) then result else result.substr(0, length))
  
  compareType = (value, type) ->
    callToString(value) is type or callToString(value, 3) is type
            
  beta = (value)->
    type = callToString value
    typeClass = BetaBase
    
    switch type
      when "string"   then typeClass = BetaString
      when "number"   then typeClass = BetaNumber
      when "object"   then typeClass = BetaObject
      when "array"    then typeClass = BetaArray
      when "date"     then typeClass = BetaDate
      when "regexp"   then typeClass = BetaRegexp
        
    return new typeClass

module.exports = ß