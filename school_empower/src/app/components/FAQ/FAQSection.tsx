// components/FAQ/FAQSection

// Components

import FAQ from "./FAQ";

const FAQSection: React.FC = () => {
  return (
    <div className="p-5 mt-5 container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="space-y-5">
          <FAQ
            title="the quick fox jumps over the lazy dog"
            label="Things on a very small scale behave like nothing "
            arrow
          />
          <FAQ
            title="the quick fox jumps over the lazy dog"
            label="Things on a very small scale behave like nothing "
            arrow
          />
          <FAQ
            title="the quick fox jumps over the lazy dog"
            label="Things on a very small scale behave like nothing "
            arrow
          />
        </div>
        <div className="space-y-5">
          <FAQ
            title="the quick fox jumps over the lazy dog"
            label="Things on a very small scale behave like nothing "
            arrow
          />
          <FAQ
            title="the quick fox jumps over the lazy dog"
            label="Things on a very small scale behave like nothing "
            arrow
          />
          <FAQ
            title="the quick fox jumps over the lazy dog"
            label="Things on a very small scale behave like nothing "
            arrow
          />
        </div>
        <div className="space-y-5">
          <FAQ
            title="the quick fox jumps over the lazy dog"
            label="Things on a very small scale behave like nothing "
            arrow
          />
          <FAQ
            title="the quick fox jumps over the lazy dog"
            label="Things on a very small scale behave like nothing "
            arrow
          />
          <FAQ
            title="the quick fox jumps over the lazy dog"
            label="Things on a very small scale behave like nothing "
            arrow
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
