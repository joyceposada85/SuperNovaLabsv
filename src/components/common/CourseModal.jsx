import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Video, Users, Tag, CheckCircle2, BookOpen, ArrowRight } from 'lucide-react';
import './CourseModal.css';

export default function CourseModal({ course, isOpen, onClose, onRequestInfo }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!course) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCTA = () => {
    onRequestInfo(course);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="course-modal-backdrop"
          onClick={handleBackdropClick}
          role="presentation"
        >
          <motion.div
            className={`course-modal course-modal--${course.accent || 'blue'}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-modal-title"
          >
            {/* Header / Close button */}
            <button
              className="course-modal__close"
              onClick={onClose}
              aria-label="Cerrar detalles del curso"
            >
              <X size={20} />
            </button>

            <div className="course-modal__content">
              {/* Badges bar */}
              <div className="course-modal__badges">
                <span className="course-modal__badge-category">{course.categoryTag}</span>
                <span className={`course-modal__badge-status course-modal__badge-status--${course.status === 'Próxima cohorte' ? 'active' : 'upcoming'}`}>
                  {course.status}
                </span>
              </div>

              {/* Course Title */}
              <h2 id="course-modal-title" className="course-modal__title">
                {course.fullName}
              </h2>

              {/* Quick details strip */}
              <div className="course-modal__meta" role="list">
                <div className="course-modal__meta-item" role="listitem">
                  <Clock size={16} className="course-modal__meta-icon" />
                  <span><strong>Duración:</strong> {course.duration}</span>
                </div>
                <div className="course-modal__meta-item" role="listitem">
                  <Video size={16} className="course-modal__meta-icon" />
                  <span><strong>Modalidad:</strong> {course.modality}</span>
                </div>
                {course.capacity && (
                  <div className="course-modal__meta-item" role="listitem">
                    <Users size={16} className="course-modal__meta-icon" />
                    <span><strong>Cupo:</strong> {course.capacity}</span>
                  </div>
                )}
                {course.price && (
                  <div className="course-modal__meta-item course-modal__meta-item--price" role="listitem">
                    <Tag size={16} className="course-modal__meta-icon" />
                    <span><strong>Precio:</strong> {course.price}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="course-modal__desc">{course.description}</p>

              {/* Content Grid: Temario & Incluye */}
              <div className="course-modal__grid">
                {/* Syllabus */}
                <div className="course-modal__section">
                  <h3 className="course-modal__section-title">
                    <BookOpen size={18} />
                    Temario del programa
                  </h3>
                  <ol className="course-modal__syllabus">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="course-modal__syllabus-item">
                        <span className="course-modal__syllabus-num">{i + 1}</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* What's Included */}
                <div className="course-modal__section">
                  <h3 className="course-modal__section-title">
                    <CheckCircle2 size={18} />
                    El programa incluye
                  </h3>
                  <ul className="course-modal__includes">
                    {course.includes.map((item, i) => (
                      <li key={i} className="course-modal__includes-item">
                        <CheckCircle2 size={16} className="course-modal__check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="course-modal__footer">
                <button
                  className="btn btn-primary course-modal__cta"
                  onClick={handleCTA}
                >
                  Solicitar información
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
