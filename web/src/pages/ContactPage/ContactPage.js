import { MetaTags, useMutation } from '@redwoodjs/web'
import {
  FieldError,
  Form,
  TextField,
  TextAreaField,
  Submit,
  FormError,
  useForm,
} from '@redwoodjs/forms'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'


const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }
  const [create, {loading, error}] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your feedback!')
      formMethods.reset()
    }
  })
  const formMethods = useForm()
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Toaster/>
      <Form className="space-y-6" onSubmit={onSubmit} config={{ mode: 'onBlur' }} error={error} formMethods={formMethods}>
        <FormError error={error} wrapperClassName="form-error"/>
        <div className=" items-center px-5 lg:px-20">
          <div className="flex flex-col w-full max-w-3xl p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div className="mt-8">
              <div className="mt-6">
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-md sm:text-xl font-medium text-neutral-600"
                    >
                      {' '}
                      Name{' '}
                    </label>
                    <div className="mt-1">
                      <TextField
                        name="name"
                        validation={{ required: true }}
                        id="name"
                        type="name"
                        autoComplete="current-name"
                        placeholder="Your Name"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        errorClassName="name border-red-700 block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:border-red-700"
                      />
                      <FieldError name="name" className='text-red-700'/>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-md sm:text-xl font-medium text-neutral-600"
                    >
                      {' '}
                      Email address{' '}
                    </label>
                    <div className="mt-1">
                      <TextField
                        name="email"
                        validation={{
                          required: true,
                          pattern: {
                            value: /^[^@]+@[^.]+\..+$/,
                            message: 'Please enter a valid email address',
                          },
                        }}
                        type="email"
                        autoComplete="email"
                        placeholder="Your Email"
                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        errorClassName="email border-red-700 block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:border-red-700"
                      />
                      <FieldError name="email" className='text-red-700'/>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-md sm:text-xl font-medium text-neutral-600"
                  >
                    {' '}
                    Message{' '}
                  </label>
                  <TextAreaField
                    name="message"
                    validation={{ required: true }}
                    className="h-24 block w-full px-4 mt-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 apearance-none autoexpand"
                    id="description"
                    type="text"
                    placeholder="Message..."
                    errorClassName='message border-red-700 h-24 block w-full px-4 mt-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:border-red-700 apearance-none autoexpand'
                  />
                  <FieldError name="message" className='text-red-700'/>
                </div>
              </div>
              <div className='mt-4'>
                <Submit
                  type="submit"
                  className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  disabled={loading}
                >
                  SAVE
                </Submit>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  )
}

export default ContactPage
