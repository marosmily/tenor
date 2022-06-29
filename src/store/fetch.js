const MIME_TYPE = 'application/json'
const ENTRYPOINT = process.env.VUE_APP_API_URL

class GeneralError extends Error {
  constructor(error) {
    super('An error occurred. Please contact the System Administrator.')
    this.error = error
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name

    return this
  }
}

class SubmissionError extends Error {
  constructor(errors) {
    if (typeof errors === 'string') {
      super(errors)
    } else {
      super('Submit Validation Failed')
    }
    this.errors = errors
    this.name = this.constructor.name

    return this
  }
}

const handleErrorsIfAny = (response, json) => {
  const error = json || response.statusText

  if (response.status === 500) {
    throw new GeneralError(error)
  }
  const errors = {_error: error}

  throw new SubmissionError(errors)
}

export default async function (id, options = {}) {
  if ('undefined' === typeof options.headers) options.headers = new Headers()

  if (null === options.headers.get('Accept'))
    options.headers.set('Accept', MIME_TYPE)

  if (
      'undefined' !== options.body &&
      !(options.body instanceof FormData) &&
      null === options.headers.get('Content-Type')
  ) {
    options.headers.set('Content-Type', MIME_TYPE)
  }

  try {
    let response = await global.fetch(new URL(id, ENTRYPOINT), options)

    if (response.ok) {
      return response
    }

    const json = await response.json()

    handleErrorsIfAny(response, json)

    return json
  } catch (e) {
    if (e instanceof SubmissionError) {
      throw e
    }

    if (e instanceof GeneralError) {
      throw e
    }

    throw e
  }
}
