import React, { useState, useRef, useEffect } from 'react';
import {
  FaBold, FaItalic, FaUnderline, FaStrikethrough,
  FaListUl, FaListOl, FaQuoteLeft, FaLink, FaUnlink,
  FaImage, FaCode, FaAlignLeft, FaAlignCenter, FaAlignRight,
  FaUndo, FaRedo, FaEye, FaFileUpload, FaTimes, FaCheck
} from 'react-icons/fa';
import { uploadImageFile } from '../../utils/blogService';

export default function RichTextEditor({ value = '', onChange }) {
  const editorRef = useRef(null);
  const [isSourceMode, setIsSourceMode] = useState(false);
  const [sourceCode, setSourceCode] = useState(value);
  const [activeFormats, setActiveFormats] = useState({});
  
  // Link Modal State
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');

  // Image Modal State
  const [showImageModal, setShowImageModal] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // Saved range for selection restoration after opening modals
  const savedRangeRef = useRef(null);

  // Keep editor content in sync with external value on initial load or reset
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || '';
      setSourceCode(value || '');
    }
  }, [value]);

  // Save selection before opening modals
  const saveSelection = () => {
    const sel = window.getSelection();
    if (sel.rangeCount > 0) {
      savedRangeRef.current = sel.getRangeAt(0);
    }
  };

  // Restore saved selection
  const restoreSelection = () => {
    if (savedRangeRef.current) {
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(savedRangeRef.current);
    }
  };

  // Format selection command
  const executeCommand = (command, value = null) => {
    if (isSourceMode) return;
    editorRef.current.focus();
    document.execCommand(command, false, value);
    checkActiveFormats();
    emitChange();
  };

  // Emit content change to parent form
  const emitChange = () => {
    if (!editorRef.current) return;
    const html = editorRef.current.innerHTML;
    setSourceCode(html);
    if (onChange) {
      onChange(html);
    }
  };

  const [currentBlock, setCurrentBlock] = useState('p');

  // Check which formatting tags are active at cursor
  const checkActiveFormats = () => {
    if (isSourceMode) return;
    setActiveFormats({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      strikeThrough: document.queryCommandState('strikeThrough'),
      insertUnorderedList: document.queryCommandState('insertUnorderedList'),
      insertOrderedList: document.queryCommandState('insertOrderedList'),
      justifyLeft: document.queryCommandState('justifyLeft'),
      justifyCenter: document.queryCommandState('justifyCenter'),
      justifyRight: document.queryCommandState('justifyRight'),
    });
    try {
      let block = (document.queryCommandValue('formatBlock') || 'p').toLowerCase().replace(/[^a-z0-9]/g, '');
      if (['h1', 'h2', 'h3', 'p', 'blockquote', 'pre'].includes(block)) {
        setCurrentBlock(block);
      }
    } catch {
      // ignore
    }
  };

  // Format Block (H1, H2, H3, Paragraph, Blockquote, Code)
  const handleBlockFormat = (tag) => {
    if (tag === 'blockquote') {
      executeCommand('formatBlock', 'blockquote');
    } else if (tag === 'pre') {
      executeCommand('formatBlock', 'pre');
    } else {
      executeCommand('formatBlock', `<${tag}>`);
    }
  };

  // Open Link Modal
  const openLinkDialog = () => {
    saveSelection();
    const sel = window.getSelection();
    setLinkText(sel.toString() || '');
    setLinkUrl('');
    setShowLinkModal(true);
  };

  // Submit Link
  const handleLinkSubmit = (e) => {
    e.preventDefault();
    if (!linkUrl) return;
    restoreSelection();
    
    let formattedUrl = linkUrl;
    if (!/^https?:\/\//i.test(formattedUrl) && !formattedUrl.startsWith('/')) {
      formattedUrl = 'https://' + formattedUrl;
    }

    if (linkText && window.getSelection().toString() !== linkText) {
      const anchorHtml = `<a href="${formattedUrl}" target="_blank" rel="noopener noreferrer" class="text-brand-yellow underline hover:text-white">${linkText}</a>`;
      executeCommand('insertHTML', anchorHtml);
    } else {
      executeCommand('createLink', formattedUrl);
    }
    setShowLinkModal(false);
    setLinkUrl('');
    setLinkText('');
  };

  // Open Image Modal
  const openImageDialog = () => {
    saveSelection();
    setImageUrl('');
    setImageAlt('');
    setShowImageModal(true);
  };

  // Handle Local Image Upload in Modal
  const handleImageFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      setIsUploading(true);
      const uploadedUrl = await uploadImageFile(file);
      setImageUrl(uploadedUrl);
    } catch (err) {
      alert('Failed to upload image: ' + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  // Submit Image Insertion
  const handleImageSubmit = (e) => {
    e.preventDefault();
    if (!imageUrl) return;
    restoreSelection();
    const imgHtml = `<img src="${imageUrl}" alt="${imageAlt || 'Article image'}" class="w-full h-auto rounded-2xl border border-white/10 my-6 shadow-xl" />`;
    executeCommand('insertHTML', imgHtml);
    setShowImageModal(false);
    setImageUrl('');
    setImageAlt('');
  };

  // Handle Toggle Source HTML View
  const toggleSourceMode = () => {
    if (isSourceMode) {
      // Switching from HTML source to visual editor
      if (editorRef.current) {
        editorRef.current.innerHTML = sourceCode;
        if (onChange) onChange(sourceCode);
      }
      setIsSourceMode(false);
    } else {
      // Switching to HTML source
      setSourceCode(editorRef.current ? editorRef.current.innerHTML : '');
      setIsSourceMode(true);
    }
  };

  const handleSourceCodeChange = (e) => {
    const newCode = e.target.value;
    setSourceCode(newCode);
    if (onChange) onChange(newCode);
  };

  return (
    <div className="w-full rounded-2xl border border-white/15 bg-[#08091a] overflow-hidden shadow-2xl">
      {/* Editor Toolbar */}
      <div className="p-2 md:p-3 border-b border-white/10 bg-white/[0.04] flex flex-wrap items-center gap-1.5 md:gap-2 select-none">
        
        {/* Block Formats (Headings) */}
        <select
          value={currentBlock}
          onChange={(e) => {
            const val = e.target.value;
            setCurrentBlock(val);
            handleBlockFormat(val);
          }}
          disabled={isSourceMode}
          className="bg-black/40 border border-white/15 text-white text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-brand-yellow font-semibold"
        >
          <option value="p">Paragraph</option>
          <option value="h1">Heading 1 (H1)</option>
          <option value="h2">Heading 2 (H2)</option>
          <option value="h3">Heading 3 (H3)</option>
          <option value="blockquote">Quote Block</option>
          <option value="pre">Code Block</option>
        </select>

        <div className="h-4 w-[1px] bg-white/15 mx-0.5" />

        {/* Text Formatting Buttons */}
        <button
          type="button"
          onClick={() => executeCommand('bold')}
          disabled={isSourceMode}
          title="Bold"
          className={`p-2 rounded-lg text-xs md:text-sm transition-all ${
            activeFormats.bold ? 'bg-brand-purple text-white shadow-glow-purple' : 'text-white/70 hover:bg-white/10 hover:text-white'
          }`}
        >
          <FaBold />
        </button>

        <button
          type="button"
          onClick={() => executeCommand('italic')}
          disabled={isSourceMode}
          title="Italic"
          className={`p-2 rounded-lg text-xs md:text-sm transition-all ${
            activeFormats.italic ? 'bg-brand-purple text-white shadow-glow-purple' : 'text-white/70 hover:bg-white/10 hover:text-white'
          }`}
        >
          <FaItalic />
        </button>

        <button
          type="button"
          onClick={() => executeCommand('underline')}
          disabled={isSourceMode}
          title="Underline"
          className={`p-2 rounded-lg text-xs md:text-sm transition-all ${
            activeFormats.underline ? 'bg-brand-purple text-white shadow-glow-purple' : 'text-white/70 hover:bg-white/10 hover:text-white'
          }`}
        >
          <FaUnderline />
        </button>

        <button
          type="button"
          onClick={() => executeCommand('strikeThrough')}
          disabled={isSourceMode}
          title="Strikethrough"
          className={`p-2 rounded-lg text-xs md:text-sm transition-all ${
            activeFormats.strikeThrough ? 'bg-brand-purple text-white shadow-glow-purple' : 'text-white/70 hover:bg-white/10 hover:text-white'
          }`}
        >
          <FaStrikethrough />
        </button>

        <div className="h-4 w-[1px] bg-white/15 mx-0.5" />

        {/* List Formatting */}
        <button
          type="button"
          onClick={() => executeCommand('insertUnorderedList')}
          disabled={isSourceMode}
          title="Bullet List"
          className={`p-2 rounded-lg text-xs md:text-sm transition-all ${
            activeFormats.insertUnorderedList ? 'bg-brand-purple text-white shadow-glow-purple' : 'text-white/70 hover:bg-white/10 hover:text-white'
          }`}
        >
          <FaListUl />
        </button>

        <button
          type="button"
          onClick={() => executeCommand('insertOrderedList')}
          disabled={isSourceMode}
          title="Numbered List"
          className={`p-2 rounded-lg text-xs md:text-sm transition-all ${
            activeFormats.insertOrderedList ? 'bg-brand-purple text-white shadow-glow-purple' : 'text-white/70 hover:bg-white/10 hover:text-white'
          }`}
        >
          <FaListOl />
        </button>

        <button
          type="button"
          onClick={() => handleBlockFormat('blockquote')}
          disabled={isSourceMode}
          title="Blockquote"
          className="p-2 rounded-lg text-xs md:text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all"
        >
          <FaQuoteLeft />
        </button>

        <div className="h-4 w-[1px] bg-white/15 mx-0.5" />

        {/* Text Alignment */}
        <button
          type="button"
          onClick={() => executeCommand('justifyLeft')}
          disabled={isSourceMode}
          title="Align Left"
          className={`p-2 rounded-lg text-xs md:text-sm transition-all ${
            activeFormats.justifyLeft ? 'bg-brand-purple text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
          }`}
        >
          <FaAlignLeft />
        </button>

        <button
          type="button"
          onClick={() => executeCommand('justifyCenter')}
          disabled={isSourceMode}
          title="Align Center"
          className={`p-2 rounded-lg text-xs md:text-sm transition-all ${
            activeFormats.justifyCenter ? 'bg-brand-purple text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
          }`}
        >
          <FaAlignCenter />
        </button>

        <button
          type="button"
          onClick={() => executeCommand('justifyRight')}
          disabled={isSourceMode}
          title="Align Right"
          className={`p-2 rounded-lg text-xs md:text-sm transition-all ${
            activeFormats.justifyRight ? 'bg-brand-purple text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
          }`}
        >
          <FaAlignRight />
        </button>

        <div className="h-4 w-[1px] bg-white/15 mx-0.5" />

        {/* Links & Images */}
        <button
          type="button"
          onClick={openLinkDialog}
          disabled={isSourceMode}
          title="Insert Link"
          className="p-2 rounded-lg text-xs md:text-sm text-brand-yellow hover:bg-brand-yellow/10 transition-all font-bold"
        >
          <FaLink />
        </button>

        <button
          type="button"
          onClick={() => executeCommand('unlink')}
          disabled={isSourceMode}
          title="Remove Link"
          className="p-2 rounded-lg text-xs md:text-sm text-white/50 hover:bg-white/10 transition-all"
        >
          <FaUnlink />
        </button>

        <button
          type="button"
          onClick={openImageDialog}
          disabled={isSourceMode}
          title="Insert Image"
          className="p-2 rounded-lg text-xs md:text-sm text-brand-lightblue hover:bg-brand-blue/20 transition-all font-bold"
        >
          <FaImage />
        </button>

        <div className="h-4 w-[1px] bg-white/15 mx-0.5" />

        {/* Undo / Redo */}
        <button
          type="button"
          onClick={() => executeCommand('undo')}
          disabled={isSourceMode}
          title="Undo"
          className="p-2 rounded-lg text-xs md:text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all"
        >
          <FaUndo />
        </button>

        <button
          type="button"
          onClick={() => executeCommand('redo')}
          disabled={isSourceMode}
          title="Redo"
          className="p-2 rounded-lg text-xs md:text-sm text-white/70 hover:bg-white/10 hover:text-white transition-all"
        >
          <FaRedo />
        </button>

        {/* Source Mode Toggle */}
        <button
          type="button"
          onClick={toggleSourceMode}
          title={isSourceMode ? "Switch to Visual Editor" : "Switch to HTML Source"}
          className={`ml-auto px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
            isSourceMode ? 'bg-brand-yellow text-black' : 'bg-white/10 text-white/80 hover:bg-white/20'
          }`}
        >
          {isSourceMode ? <FaEye size={12} /> : <FaCode size={12} />}
          {isSourceMode ? 'Visual' : 'HTML'}
        </button>
      </div>

      {/* Editable Area */}
      {isSourceMode ? (
        <textarea
          value={sourceCode}
          onChange={handleSourceCodeChange}
          className="w-full min-h-[350px] max-h-[600px] p-5 bg-[#03030b] text-brand-yellow font-mono text-sm leading-relaxed focus:outline-none resize-y"
          placeholder="Paste or write HTML markup here..."
        />
      ) : (
        <div
          ref={editorRef}
          contentEditable
          onInput={emitChange}
          onKeyUp={checkActiveFormats}
          onMouseUp={checkActiveFormats}
          className="rich-editor-content min-h-[350px] max-h-[600px] p-6 text-white text-base md:text-lg leading-relaxed focus:outline-none overflow-y-auto"
          style={{ wordBreak: 'break-word' }}
        />
      )}

      {/* Link Insertion Modal */}
      {showLinkModal && (
        <div className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0c0e29] border border-white/20 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <h3 className="text-white font-bold text-base flex items-center gap-2">
                <FaLink className="text-brand-yellow" /> Insert Hyperlink
              </h3>
              <button onClick={() => setShowLinkModal(false)} className="text-white/50 hover:text-white">
                <FaTimes />
              </button>
            </div>
            <form onSubmit={handleLinkSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-white/60 font-medium block mb-1">LINK TEXT</label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="e.g. Visit Magdio Portfolio"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-brand-yellow"
                />
              </div>
              <div>
                <label className="text-xs text-white/60 font-medium block mb-1">TARGET URL *</label>
                <input
                  type="text"
                  required
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://example.com or /services"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-brand-yellow"
                />
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLinkModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white/70 hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-yellow text-black hover:bg-white transition-all flex items-center gap-1.5"
                >
                  <FaCheck /> Insert Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Image Insertion Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0c0e29] border border-white/20 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <h3 className="text-white font-bold text-base flex items-center gap-2">
                <FaImage className="text-brand-blue" /> Insert Image
              </h3>
              <button onClick={() => setShowImageModal(false)} className="text-white/50 hover:text-white">
                <FaTimes />
              </button>
            </div>
            <form onSubmit={handleImageSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-white/60 font-medium block mb-1">IMAGE URL</label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-brand-yellow"
                />
              </div>
              
              <div className="text-center text-xs text-white/40 font-bold uppercase tracking-widest my-1">
                — OR —
              </div>

              <div>
                <label className="text-xs text-white/60 font-medium block mb-1">UPLOAD LOCAL FILE</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileUpload}
                  id="editor-image-upload"
                  className="hidden"
                />
                <label
                  htmlFor="editor-image-upload"
                  className="w-full border border-dashed border-white/20 hover:border-brand-yellow/50 rounded-xl p-3 text-white/70 flex items-center justify-center gap-2 cursor-pointer text-xs transition-all"
                >
                  {isUploading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-brand-yellow/30 border-t-brand-yellow rounded-full animate-spin"></div>
                      <span>Uploading Image...</span>
                    </>
                  ) : imageUrl ? (
                    <span className="text-green-400 font-semibold truncate max-w-[200px]">✓ Image Uploaded</span>
                  ) : (
                    <>
                      <FaFileUpload /> Select Image File
                    </>
                  )}
                </label>
              </div>

              <div>
                <label className="text-xs text-white/60 font-medium block mb-1">ALT TEXT / CAPTION</label>
                <input
                  type="text"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="Descriptive caption for SEO and accessibility"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-brand-yellow"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowImageModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white/70 hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!imageUrl}
                  className={`px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    imageUrl ? 'bg-brand-blue text-white hover:bg-brand-yellow hover:text-black' : 'bg-white/10 text-white/30 cursor-not-allowed'
                  }`}
                >
                  <FaCheck /> Insert Image
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
