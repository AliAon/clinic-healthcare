exports.generateFileUrl=(req, filePath)=>{
    const protocol = req.protocol;            // Get the protocol (http or https)
    const hostname = req.hostname;            // Get the hostname (e.g., localhost or domain)
    const port = req.socket.localPort;        // Get the current port (e.g., 3000 in dev)
    
    // Replace backslashes with forward slashes in filePath (Windows-specific issue)
    const formattedPath = filePath.replace(/\\/g, '/');
    
    // Add port to URL only if it's a non-default port (not 80 for HTTP, not 443 for HTTPS)
    const portPart = (port && port !== 80 && port !== 443) ? `:${port}` : '';
    
    // Construct and return the full URL
    return `${protocol}://${hostname}${portPart}/${formattedPath}`;
  }
  