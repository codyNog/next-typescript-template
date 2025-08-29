# Repository Analysis

Analyze project structure and codebase, then output results to a Markdown file.

## Instructions

Follow these steps to analyze the repository and save results to file:

1. **Project Investigation**
   - Check README.md, package.json and other config files
   - Understand directory structure
   - Identify technologies used

2. **Organize Analysis Results**
   - Technology stack
   - Directory structure and roles
   - Key dependencies
   - Development environment setup

3. **Output Results**
   - Create `repository-analysis.md` file
   - Record analysis results in structured format

## Output File Format

```markdown
# Repository Analysis Results

## Project Overview
- Project Name: [name]
- Description: [overview]
- Language: [primary language]
- Framework: [framework used]

## Directory Structure
- `src/` - [role]
- `public/` - [role]
- `docs/` - [role]

## Key Dependencies
### Production Dependencies
- [library name] - [version]

### Development Dependencies  
- [tool name] - [version]

## Configuration Files
- [config file name] - [purpose]

## Analysis Date
[execution datetime]
```

Arguments: $ARGUMENTS (specify output filename, default: repository-analysis.md)
