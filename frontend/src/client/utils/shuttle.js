export default function shuttleMiddleware(host) {
  return () => next => action => {
    const {
      nextAction, shuttle, ...rest
    } = action

    if (!shuttle || (shuttle && !shuttle.method)) {
      return next(action)
    }

    const {
      headers: headers = {},
      path: path = '',
      payloads: payload = null,
      qs: qs = null,
      method: method = '',
    } = shuttle

    const shuttleUrl = host + path

    const apiParams = {
      qs,
      payload,
      headers,
      shuttleUrl,
    }

    const nextParams = {
      ...rest,
      promise: api => api[method.toLowerCase()](apiParams),
      nextAction,
    }

    return next(nextParams)
  }
}