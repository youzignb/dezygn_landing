import { Navigate, useParams } from 'react-router-dom';
import FeaturePageLayout from './FeaturePageLayout';
import { generatedFeaturePages } from '../../data/features.generated';

/**
 * Renders compiler-generated /features/<slug> pages.
 * Slugs: prompt-canvas, awa-chat, new-brand-import, gallery-share.
 * Falls back to /features for unknown slugs so existing static routes are unaffected.
 */
const GeneratedFeaturePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const props = slug ? generatedFeaturePages[slug] : undefined;

  if (!props) {
    return <Navigate to="/features" replace />;
  }

  return <FeaturePageLayout {...props} />;
};

export default GeneratedFeaturePage;
