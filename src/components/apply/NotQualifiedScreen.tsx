import ResourceLinks from './ResourceLinks';

export default function NotQualifiedScreen() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Thanks for your application.
      </h2>
      <p className="text-gray-400 text-lg max-w-lg mx-auto mb-3">
        Based on your submission, the AIPA Launchpad might not be a good fit
        at the moment.
      </p>
      <p className="text-gray-400 max-w-lg mx-auto">
        I'll keep you updated when I release a self-service course in the
        future. In the meantime, here are some free resources to help you get
        started with AI photography.
      </p>

      <ResourceLinks />

      <p className="text-gray-500 text-sm max-w-md mx-auto mt-10">
        When you're ready to invest in launching your APA, reply to the email
        that brought you here or come back to this page. We'd love to have
        you.
      </p>
    </div>
  );
}
